// Playwright CLI run-code input. Local fixtures only; see docs/monetization-launch.md.
async (page) => {
  const errors = [];
  const outcomes = [];
  page.on('pageerror', error => errors.push(error.message));
  let scriptRequests = 0;
  const fixture = `(() => {
    const scenario = new URLSearchParams(location.search).get('adscenario') || 'accept';
    const us = scenario === 'us' || scenario === 'deferred-us';
    const fixture = window.__adFixture = { requests: 0, blockedPushes: 0, revocations: 0, gppRegistrations: 0 };
    const tcfListeners = new Map(); const gppListeners = [];
    let nextId = 1;
    let tc = { cmpStatus:'loaded', gdprApplies:!us, eventStatus:scenario==='pending'?'cmpuishown':'tcloaded', purpose:{consents:{1:scenario!=='reject'}}, vendor:{consents:{755:scenario!=='reject'}} };
    let usReady = scenario !== 'deferred-us';
    const waitingUs = [];
    const old = window.adsbygoogle;
    window.adsbygoogle = { pauseAdRequests:old.pauseAdRequests, requestNonPersonalizedAds:old.requestNonPersonalizedAds,
      push() {
        if(this.pauseAdRequests !== 0) { fixture.blockedPushes++; return; }
        fixture.requests++;
        const ins = document.querySelector('ins.adsbygoogle');
        if(ins) { ins.dataset.adsbygoogleStatus='done'; ins.dataset.adStatus=scenario==='unfilled'?'unfilled':'filled'; ins.innerHTML='<div style="height:250px;display:grid;place-items:center;background:#eef2f6;color:#475569;font:14px sans-serif">LOCAL AD SIMULATION — no live impression</div>'; }
      }
    };
    window.__tcfapi = (command, version, callback, id) => {
      if(command==='addEventListener') { const listenerId=nextId++; tcfListeners.set(listenerId,callback); callback({...tc,listenerId},true); }
      if(command==='removeEventListener') tcfListeners.delete(id);
    };
    window.__gpp = (command, callback) => { if(command==='addEventListener') {fixture.gppRegistrations++; gppListeners.push(callback); callback({eventName:'listenerRegistered',pingData:{signalStatus:'ready',cmpStatus:'loaded'}},true);} };
    fixture.consent = value => { tc={...tc,eventStatus:'useractioncomplete',purpose:{consents:{1:value}},vendor:{consents:{755:value}}}; tcfListeners.forEach((callback,id)=>callback({...tc,listenerId:id},true)); };
    fixture.gppChange = () => gppListeners.forEach(callback=>callback({eventName:'sectionChange',pingData:{signalStatus:'ready',cmpStatus:'loaded'}},true));
    fixture.gppError = () => gppListeners.forEach(callback=>callback({eventName:'error',pingData:{signalStatus:'ready',cmpStatus:'loaded'}},true));
    fixture.releaseUs = () => {usReady=true; waitingUs.splice(0).forEach(callback=>callback());};
    window.googlefc.usstatesoptout={getInitialUsStatesOptOutStatus:()=>us?2:1};
    window.googlefc.showRevocationMessage=()=>{fixture.revocations++; fixture.consent(false);};
    const queued=window.googlefc.callbackQueue;
    const dispatch = entry => Object.entries(entry).forEach(([key, callback])=>{
      if(key==='CONSENT_API_READY') callback();
      if(key==='INITIAL_US_STATES_OPT_OUT_DATA_READY') {if(usReady) callback(); else waitingUs.push(callback);}
    });
    window.googlefc.callbackQueue={push:entry=>dispatch(entry)};
    queued.forEach(dispatch);
  })();`;
  await page.context().route('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js*', async route => {scriptRequests++; await route.fulfill({contentType:'application/javascript',body:fixture});});
  await page.context().route(/https:\/\/.*(?:doubleclick\.net|fundingchoicesmessages\.google\.com|googleadservices\.com)\//, route=>route.abort());
  const waitFixture = () => page.waitForFunction(()=>Boolean(window.__adFixture));
  const read = () => page.evaluate(()=>({requests:window.__adFixture.requests,blocked:window.__adFixture.blockedPushes,pause:window.adsbygoogle.pauseAdRequests,monitor:window.aiedhkGppMonitor,scripts:document.querySelectorAll('#aiedhk-adsense').length}));
  const assert = (value,message) => {if(!value) throw new Error(message);};
  await page.setViewportSize({width:1440,height:1000});
  await page.goto('http://localhost:3317/en?adscenario=pending');
  await waitFixture();
  assert((await read()).requests===0,'Requested before consent');
  await page.evaluate(()=>window.__adFixture.consent(true));
  await page.waitForFunction(()=>window.__adFixture.requests===1);
  assert((await read()).pause===0,'SDK replacement remained paused');
  await page.setViewportSize({width:1366,height:900});
  assert((await read()).requests===1,'Resize duplicated the ad');
  await page.evaluate(()=>window.__adFixture.consent(false));
  await page.waitForFunction(()=>window.adsbygoogle.pauseAdRequests===1 && !document.querySelector('ins.adsbygoogle'));
  outcomes.push('pending -> accept -> revoke; SDK replacement; resize deduplication');
  await page.goto('http://localhost:3317/en?adscenario=reject');
  await waitFixture();
  assert((await read()).requests===0,'Requested after rejection');
  assert(await page.locator('h1').isVisible(),'Reading blocked after rejection');
  outcomes.push('rejected consent keeps content readable');
  await page.goto('http://localhost:3317/en?adscenario=unfilled');
  await waitFixture();
  await page.locator('#home-ad').waitFor({state:'hidden'});
  outcomes.push('unfilled ad collapses');
  await page.goto('http://localhost:3317/en?adscenario=us');
  await waitFixture();
  await page.waitForFunction(()=>window.__adFixture.requests===1);
  const scriptsBefore=scriptRequests;
  await page.locator('header nav a[href="/en/news"]').click();
  await page.waitForURL('**/en/news');
  await page.waitForFunction(()=>!document.querySelector('#home-ad') && window.adsbygoogle.pauseAdRequests===1);
  assert((await read()).pause===1,'Navigation did not pause live SDK');
  await page.evaluate(()=>window.__adFixture.gppChange());
  await page.locator('header nav a[href="/en"]').click();
  await page.waitForURL('**/en');
  await page.waitForFunction(()=>window.aiedhkGppMonitor.changed);
  assert((await read()).pause===1 && (await read()).requests===1,'Off-home opt-out was lost on return');
  assert(scriptRequests===scriptsBefore,'SPA navigation reloaded SDK');
  outcomes.push('SPA navigation; persistent US opt-out; one SDK per document');
  await page.goto('http://localhost:3317/en?adscenario=deferred-us');
  await waitFixture();
  await page.locator('header nav a[href="/en/news"]').click();
  await page.waitForURL('**/en/news');
  await page.waitForFunction(()=>!document.querySelector('#home-ad') && window.adsbygoogle.pauseAdRequests===1);
  await page.evaluate(()=>{window.__adFixture.releaseUs();window.__adFixture.gppChange();});
  await page.locator('header nav a[href="/en"]').click();
  await page.waitForURL('**/en');
  await page.locator('#home-ad').waitFor({state:'hidden'});
  assert((await read()).requests===0,'Opt-out during delayed CMP readiness was lost');
  outcomes.push('leave before CMP readiness; off-home readiness and opt-out');
  await page.goto('http://localhost:3317/en?adscenario=us');
  await waitFixture();
  await page.waitForFunction(()=>window.__adFixture.requests===1);
  await page.evaluate(()=>window.__adFixture.gppError());
  await page.waitForFunction(()=>window.adsbygoogle.pauseAdRequests===1);
  outcomes.push('explicit GPP error fails closed');
  await page.goto('http://localhost:3317/en?privacy=1&adscenario=accept#home-ad');
  await waitFixture();
  await page.waitForFunction(()=>window.__adFixture?.revocations===1);
  assert(!new URL(page.url()).searchParams.has('privacy'),'Privacy reopening query was not consumed');
  await page.locator('footer a[href="/en?privacy=1#home-ad"]').click();
  await page.waitForFunction(()=>window.__adFixture?.revocations===1 && !new URLSearchParams(location.search).has('privacy'));
  outcomes.push('privacy choice can be reopened repeatedly');
  for(const locale of ['en','zh-hant','zh-hans','es','fr','pt','de','ar','ko','ja','hi','ru','id','bn']) {
    for(const width of [390,1024,1440]) {
      await page.setViewportSize({width,height:900});
      await page.goto('http://localhost:3317/'+locale+'?adscenario=reject');
      await waitFixture();
      assert(!(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)),'Horizontal overflow '+locale+' '+width);
      const headerSupport=page.locator('header a[href="https://buymeacoffee.com/aiedhk-local-test"]:visible');
      if(width>=1440) assert(await headerSupport.count()===1,'Missing desktop support '+locale);
      if(width===390) {
        await page.locator('header button[aria-expanded]:not([aria-haspopup])').click();
        assert(await headerSupport.count()===1,'Missing mobile support '+locale);
      }
    }
  }
  outcomes.push('14 locale layouts at 390/1024/1440; desktop/mobile support');
  const slug='news-openai-interactive-learning-anthropic-claude-reflection';
  await page.setViewportSize({width:1440,height:1000});
  await page.goto('http://localhost:3317/en/news/'+slug);
  await page.locator('[data-article-monetization]').scrollIntoViewIfNeeded();
  assert(await page.locator('a[href="https://try.gamma.app/aiedhk-local-test"][rel~="sponsored"]').count()===1,'Missing reviewed affiliate');
  await page.screenshot({path:'output/playwright/article-desktop-local-demo.png'});
  await page.setViewportSize({width:390,height:844});
  await page.goto('http://localhost:3317/zh-hans/news/'+slug);
  await page.locator('[data-article-monetization]').scrollIntoViewIfNeeded();
  await page.screenshot({path:'output/playwright/article-mobile-local-demo.png'});
  await page.goto('http://localhost:3317/ar/academy/what-artificial-intelligence-is');
  assert(await page.locator('[data-article-monetization]').count()===1,'Missing Academy support');
  assert(await page.locator('a[href="https://try.gamma.app/aiedhk-local-test"]').count()===0,'Affiliate leaked to unrelated Academy article');
  assert(!(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)),'RTL support overflow');
  outcomes.push('reviewed article referral only; Academy support; RTL');
  assert(errors.length===0,JSON.stringify(errors));
  return {testMode:'LOCAL SDK/CMP SIMULATION; no live impressions or payments',outcomes,scriptRequests,pageErrors:errors};
}
