import assert from "node:assert/strict";
import test from "node:test";
import type { ComponentProps, MouseEvent } from "react";
import PaginationLink from "@/components/PaginationLink";

type HistoryEntry = { data: unknown; title: string; url: string };

function withWindow(currentUrl: string, check: (state: { entries: HistoryEntry[]; scrolls: ScrollToOptions[] }) => void) {
  const previousWindow = Object.getOwnPropertyDescriptor(globalThis, "window");
  const entries: HistoryEntry[] = [];
  const scrolls: ScrollToOptions[] = [];
  const location = new URL(currentUrl);
  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: {
      location,
      history: {
        pushState(data: unknown, title: string, url: string | URL) {
          entries.push({ data, title, url: String(url) });
          location.href = new URL(String(url), location.href).href;
        },
      },
      scrollTo(options: ScrollToOptions) { scrolls.push(options); },
    },
  });
  try {
    check({ entries, scrolls });
  } finally {
    if (previousWindow) Object.defineProperty(globalThis, "window", previousWindow);
    else Reflect.deleteProperty(globalThis, "window");
  }
}

function clickEvent(href: string, overrides: Partial<MouseEvent<HTMLAnchorElement>> = {}, target = "") {
  const event = {
    button: 0,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    altKey: false,
    defaultPrevented: false,
    currentTarget: { href, target },
    preventDefault() { this.defaultPrevented = true; },
    ...overrides,
  };
  return event as MouseEvent<HTMLAnchorElement>;
}

function anchor(props: ComponentProps<typeof PaginationLink>) {
  const element = PaginationLink(props);
  assert.equal(element.type, "a", "pagination keeps a native anchor fallback");
  assert.equal(element.props.href, props.href);
  assert.equal(typeof element.props.onClick, "function");
  return element;
}

test("same-listing pagination updates the exact filtered URL once and scrolls to the new results", () => {
  for (const path of ["/en/news", "/zh-hant/academy", "/ar/news"]) {
    const filters = path.endsWith("academy") ? "track=ai-knowledge&level=core" : "type=conference&year=2026";
    const current = `https://www.aied.hk${path}?q=AI+%26+learning+%2B+%E6%95%99%E5%AD%B8&${filters}&page=1`;
    const destination = `${path}?q=AI+%26+learning+%2B+%E6%95%99%E5%AD%B8&${filters}&page=2`;
    withWindow(current, ({ entries, scrolls }) => {
      const element = anchor({ href: destination, children: "Next", "aria-label": "Next page", className: "pagination-control" });
      assert.equal(element.props["aria-label"], "Next page");
      assert.equal(element.props.className, "pagination-control");
      const event = clickEvent(destination);
      element.props.onClick(event);
      assert.equal(event.defaultPrevented, true);
      assert.deepEqual(entries, [{ data: null, title: "", url: destination }]);
      assert.equal(window.location.href, `https://www.aied.hk${destination}`);
      assert.deepEqual(scrolls, [{ top: 0, behavior: "instant" }]);
      assert.equal(new URL(window.location.href).searchParams.get("q"), "AI & learning + 教學");

      element.props.onClick(clickEvent(destination));
      assert.equal(entries.length, 1, "clicking the current URL must not append duplicate history entries");
    });
  }
});

test("an already-current page remains a link but does not create a history entry", () => {
  withWindow("https://www.aied.hk/en/news?page=2", ({ entries }) => {
    for (const href of ["/en/news?page=2", "https://www.aied.hk/en/news?page=2"]) {
      const event = clickEvent(href);
      anchor({ href, "aria-current": "page", children: "2" }).props.onClick(event);
      assert.equal(event.defaultPrevented, true);
      assert.equal(entries.length, 0);
    }
  });
});

test("modified clicks and non-left clicks preserve native browser behavior", () => {
  const href = "/en/news?page=2";
  const cases: Partial<MouseEvent<HTMLAnchorElement>>[] = [
    { ctrlKey: true }, { metaKey: true }, { shiftKey: true }, { altKey: true }, { button: 1 }, { button: 2 },
  ];
  for (const modifiers of cases) {
    withWindow("https://www.aied.hk/en/news?page=1", ({ entries, scrolls }) => {
      const event = clickEvent(href, modifiers);
      anchor({ href, children: "Next" }).props.onClick(event);
      assert.equal(event.defaultPrevented, false);
      assert.equal(entries.length, 0);
      assert.equal(scrolls.length, 0);
    });
  }
});

test("a previously prevented click does not navigate or scroll", () => {
  withWindow("https://www.aied.hk/en/news?page=1", ({ entries, scrolls }) => {
    const href = "/en/news?page=2";
    anchor({ href }).props.onClick(clickEvent(href, { defaultPrevented: true }));
    assert.equal(entries.length, 0);
    assert.equal(scrolls.length, 0);
  });
});

test("new windows, named targets, different routes, and different origins use the anchor fallback", () => {
  const cases = [
    { href: "/en/news?page=2", target: "_blank" },
    { href: "/en/news?page=2", target: "results-window" },
    { href: "/en/academy?page=2" },
    { href: "/zh-hant/news?page=2" },
    { href: "https://example.com/en/news?page=2" },
  ];
  for (const props of cases) {
    withWindow("https://www.aied.hk/en/news?page=1", ({ entries, scrolls }) => {
      const event = clickEvent(props.href, {}, props.target);
      anchor(props).props.onClick(event);
      assert.equal(event.defaultPrevented, false, `${props.href} with target ${props.target ?? "default"}`);
      assert.equal(entries.length, 0);
      assert.equal(scrolls.length, 0);
    });
  }
});

test("an explicit self target still supports same-listing pagination", () => {
  withWindow("https://www.aied.hk/en/news?page=1", ({ entries }) => {
    const href = "/en/news?page=2";
    const event = clickEvent(href, {}, "_self");
    anchor({ href, target: "_self" }).props.onClick(event);
    assert.equal(event.defaultPrevented, true);
    assert.equal(entries.length, 1);
  });
});
