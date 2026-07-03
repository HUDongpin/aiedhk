import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import * as BackToTopArrowModule from "@/components/BackToTopArrow";

const BackToTopArrow = BackToTopArrowModule.default;

type ScrollProgressCalculator = (metrics: { scrollTop: number; scrollHeight: number; clientHeight: number }) => number;

function scrollProgressCalculator(): ScrollProgressCalculator {
  const calculator = (BackToTopArrowModule as { getScrollProgress?: ScrollProgressCalculator }).getScrollProgress;
  assert.equal(typeof calculator, "function");
  assert.ok(calculator);
  return calculator;
}

test("back-to-top button renders a circular scroll progress indicator", () => {
  const html = renderToStaticMarkup(React.createElement(BackToTopArrow));

  assert.match(html, /role="progressbar"/);
  assert.match(html, /aria-valuemin="0"/);
  assert.match(html, /aria-valuemax="100"/);
  assert.match(html, /aria-valuenow="0"/);
  assert.match(html, /aria-label="Page scroll progress"/);
  assert.match(html, /\bstroke-dasharray\b/);
});

test("back-to-top progress ring sits inside the button artwork", () => {
  const html = renderToStaticMarkup(React.createElement(BackToTopArrow));

  assert.match(html, /r="22\.5"/);
  assert.doesNotMatch(html, /r="20"/);
  assert.doesNotMatch(html, /r="19\.5"/);
  assert.doesNotMatch(html, /r="25"/);
});

test("back-to-top base artwork has no baked static progress image", () => {
  const html = renderToStaticMarkup(React.createElement(BackToTopArrow));

  assert.doesNotMatch(html, /mais-back-to-top-arrow\.png/);
  assert.match(html, /data-artwork="back-to-top-base"/);
});

test("back-to-top base artwork matches the white button and gray progress track reference", () => {
  const html = renderToStaticMarkup(React.createElement(BackToTopArrow));

  assert.match(html, /fill="#fbfdff"/);
  assert.match(html, /stroke="#dfe6ee"/);
  assert.match(html, /data-track="page-progress-track"/);
  assert.doesNotMatch(html, /backToTopFace/);
  assert.doesNotMatch(html, /#aef2f6/);
  assert.doesNotMatch(html, /#8fe2ed/);
});

test("back-to-top dynamic progress keeps the existing blue arc", () => {
  const html = renderToStaticMarkup(React.createElement(BackToTopArrow));

  assert.match(html, /data-track="page-progress-arc"/);
  assert.match(html, /stroke="#48d5e8"/);
  assert.match(html, /transform="rotate\(-90 28 28\)"/);
});

test("back-to-top base artwork uses the screenshot-style arrow", () => {
  const html = renderToStaticMarkup(React.createElement(BackToTopArrow));

  assert.match(html, /d="M28 37\.5V20\.5M19\.5 29 28 20\.5 36\.5 29"/);
  assert.match(html, /stroke-width="3\.5"/);
  assert.doesNotMatch(html, /d="M28 37V21"/);
  assert.doesNotMatch(html, /d="M21\.5 27\.5 28 21l6\.5 6\.5"/);
});

test("back-to-top progress uses page scroll distance", () => {
  const getScrollProgress = scrollProgressCalculator();

  assert.equal(getScrollProgress({ scrollTop: 0, scrollHeight: 1600, clientHeight: 800 }), 0);
  assert.equal(getScrollProgress({ scrollTop: 400, scrollHeight: 1600, clientHeight: 800 }), 50);
  assert.equal(getScrollProgress({ scrollTop: 800, scrollHeight: 1600, clientHeight: 800 }), 100);
  assert.equal(getScrollProgress({ scrollTop: 1200, scrollHeight: 1600, clientHeight: 800 }), 100);
  assert.equal(getScrollProgress({ scrollTop: 40, scrollHeight: 700, clientHeight: 800 }), 0);
});
