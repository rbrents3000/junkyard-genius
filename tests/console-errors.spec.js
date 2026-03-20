const { test, expect } = require('@playwright/test');
const { EXTERNAL_IGNORE } = require('./helpers');

function isExternal(url) {
  return EXTERNAL_IGNORE.some(domain => url.includes(domain));
}

const KEY_PAGES = [
  { name: 'Homepage', path: '/' },
  { name: 'Category: fire-and-plasma', path: '/categories/fire-and-plasma/' },
  { name: 'Build: plasma-tornado-lamp', path: '/categories/fire-and-plasma/001-plasma-tornado-lamp/' },
  { name: 'Browse', path: '/app/browse/' },
  { name: 'Quiz', path: '/app/quiz/' },
  { name: 'Toolbox', path: '/app/toolbox/' },
  { name: 'Privacy', path: '/privacy/' },
];

// ── No JS console errors ──

test.describe('Console Errors', () => {
  for (const { name, path } of KEY_PAGES) {
    test(`${name} has no JS console errors`, async ({ page }) => {
      const errors = [];
      page.on('console', msg => {
        if (msg.type() === 'error') {
          const text = msg.text();
          // Ignore external service errors (analytics, fonts, etc.)
          if (!isExternal(text)) {
            errors.push(text);
          }
        }
      });
      await page.goto(path, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(1000);
      expect(errors).toEqual([]);
    });
  }
});

// ── No failed internal resource loads ──

test.describe('Resource Loading', () => {
  test('category page has no 404 internal resources', async ({ page }) => {
    const failed = [];
    page.on('response', resp => {
      if (resp.status() >= 400 && !isExternal(resp.url())) {
        failed.push(`${resp.status()} ${resp.url()}`);
      }
    });
    await page.goto('/categories/fire-and-plasma/', { waitUntil: 'load' });
    expect(failed).toEqual([]);
  });

  test('build page has no 404 internal resources', async ({ page }) => {
    const failed = [];
    page.on('response', resp => {
      if (resp.status() >= 400 && !isExternal(resp.url())) {
        failed.push(`${resp.status()} ${resp.url()}`);
      }
    });
    await page.goto('/categories/fire-and-plasma/001-plasma-tornado-lamp/', { waitUntil: 'load' });
    expect(failed).toEqual([]);
  });

  test('browse page has no 404 internal resources', async ({ page }) => {
    const failed = [];
    page.on('response', resp => {
      if (resp.status() >= 400 && !isExternal(resp.url())) {
        failed.push(`${resp.status()} ${resp.url()}`);
      }
    });
    await page.goto('/app/browse/', { waitUntil: 'load' });
    expect(failed).toEqual([]);
  });

  test('homepage has no 404 internal resources', async ({ page }) => {
    const failed = [];
    page.on('response', resp => {
      if (resp.status() >= 400 && !isExternal(resp.url())) {
        failed.push(`${resp.status()} ${resp.url()}`);
      }
    });
    await page.goto('/', { waitUntil: 'load' });
    expect(failed).toEqual([]);
  });
});

// ── Stylesheets load correctly ──

test.describe('CSS Loading', () => {
  test('all stylesheets are accessible', async ({ page }) => {
    await page.goto('/');
    const accessible = await page.evaluate(() => {
      const sheets = document.styleSheets;
      const results = [];
      for (const sheet of sheets) {
        try {
          // Accessing cssRules throws if CORS blocks it
          const count = sheet.cssRules.length;
          results.push({ href: sheet.href || 'inline', rules: count, ok: true });
        } catch (e) {
          results.push({ href: sheet.href || 'inline', ok: false, error: e.message });
        }
      }
      return results;
    });
    // All local stylesheets should be accessible
    for (const sheet of accessible) {
      if (sheet.href && !isExternal(sheet.href)) {
        expect(sheet.ok).toBe(true);
      }
    }
  });
});
