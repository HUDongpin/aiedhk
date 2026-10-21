// Playwright CLI run-code input. Local fixtures only; see docs/monetization-launch.md.
async (page) => {
  const locales = ['en','zh-hant','zh-hans','es','fr','pt','de','ar','ko','ja','hi','ru','id','bn'];
  const requests = [];
  const errors = [];
  page.on('request', request => { if (/googlesyndication|fundingchoices|buymeacoffee|partnerstack|try\.gamma/.test(request.url())) requests.push(request.url()); });
  page.on('pageerror', error => errors.push(error.message));
  const checks = [];
  for (const locale of locales) {
    for (const route of ['', '/privacy', '/disclosure']) {
      const response = await page.goto('http://localhost:3317/' + locale + route);
      if (response.status() !== 200) throw new Error('HTTP ' + response.status() + ': ' + locale + route);
      await page.locator('footer').waitFor();
      if (await page.locator('script[src*="googlesyndication"], a[href*="buymeacoffee.com"], ins.adsbygoogle').count()) {
        // The privacy document links to the provider policy, never a payment page.
        const unexpected = await page.locator('script[src*="googlesyndication"], ins.adsbygoogle, a[href*="buymeacoffee.com"]:not([href$="privacy-policy"])').count();
        if (unexpected) throw new Error('Unconfigured commercial UI: ' + locale + route);
      }
      if (!(await page.locator('footer a[href="/' + locale + '/privacy"]').count())) throw new Error('Missing privacy link');
      checks.push(locale + route);
    }
  }
  for (const locale of ['en','zh-hans','ar']) {
    await page.setViewportSize({width:390,height:844});
    await page.goto('http://localhost:3317/' + locale + '/privacy');
    if (await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)) throw new Error('Policy horizontal overflow: ' + locale);
    if (locale === 'ar' && !(await page.locator('div[lang="en-HK"][dir="ltr"]').count())) throw new Error('English policy not isolated from RTL');
    await page.screenshot({path:'output/playwright/privacy-' + locale + '-mobile.png',fullPage:true});
  }
  const ads = await page.request.get('http://localhost:3317/ads.txt');
  if (ads.status() !== 404) throw new Error('Unconfigured ads.txt should be 404');
  if (requests.length || errors.length) throw new Error(JSON.stringify({requests,errors}));
  return {scenario:'accounts-unconfigured',routes:checks.length,locales:locales.length,providerRequests:requests.length,pageErrors:errors,adsTxt:ads.status(),mobilePolicies:['en','zh-hans','ar']};
}
