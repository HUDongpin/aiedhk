import assert from "node:assert/strict";
import test from "node:test";

async function preview() {
  try {
    return await import("../scripts/preview-newsletter");
  } catch (error) {
    assert.fail(`Newsletter preview script is missing: ${String(error)}`);
  }
}

test("offline preview rewrites only approved image sources and preserves article destinations", async () => {
  const { localizePreviewImages } = await preview();
  const production = '<a href="https://www.aied.hk/en/news/article">Read</a><img src="https://www.aied.hk/images/newsletter/cover-123456abcdef.jpg" alt="A cover"><p>https://www.aied.hk/images/newsletter/cover-123456abcdef.jpg</p>';
  const result = localizePreviewImages(production);
  assert.equal(result, '<a href="https://www.aied.hk/en/news/article">Read</a><img src="/images/newsletter/cover-123456abcdef.jpg" alt="A cover"><p>https://www.aied.hk/images/newsletter/cover-123456abcdef.jpg</p>');
  for (const source of [
    "https://other.example/images/newsletter/cover-123456abcdef.jpg",
    "https://www.aied.hk/images/newsletter/../secret.jpg",
    "https://www.aied.hk/images/newsletter/cover-123456abcdef.jpg?token=secret",
    "https://www.aied.hk/images/newsletter/%2e%2e/secret.jpg",
    "https://www.aied.hk/images/newsletter/cover.jpg",
    "https://www.aied.hk/images/newsletter/cover-123456abcdef.png",
    "https://www.aied.hk/images/newsletter/cover-123456abcdef.webp",
    "https://www.aied.hk/images/newsletter/nested/cover-123456abcdef.jpg",
  ]) assert.throws(() => localizePreviewImages(`<img src="${source}">`), /image source/);
});

test("preview server routes only generated review files and newsletter derivatives", async () => {
  const { previewFilePath } = await preview();
  const root = "/tmp/newsletter-preview-test";
  assert.equal(previewFilePath("/", root), `${root}/outputs/newsletter-preview/index.html`);
  assert.equal(previewFilePath("/news-preview.html", root), `${root}/outputs/newsletter-preview/news-preview.html`);
  assert.equal(previewFilePath("/images/newsletter/cover-123456abcdef.jpg", root), `${root}/public/images/newsletter/cover-123456abcdef.jpg`);
  for (const path of ["/.env", "/package.json", "/../news.html", "/images/newsletter/../../.env", "/images/newsletter/%2e%2e/secret.jpg", "/other/news.html", "/images/newsletter/cover.svg", "/images/newsletter/cover.jpg", "/images/newsletter/cover-123456abcdef.png", "/images/newsletter/cover-123456abcdef.webp", "/images/newsletter/nested/cover-123456abcdef.jpg"])
    assert.equal(previewFilePath(path, root), null, path);
});
