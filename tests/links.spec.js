const { test, expect } = require('@playwright/test');
const { SAMPLE_BUILDS } = require('./helpers');

// ── Category card links resolve ──

test.describe('Category Card Links', () => {
  const categories = [
    '/categories/fire-and-plasma/',
    '/categories/pi-and-arduino/',
    '/categories/household-chemistry/',
  ];

  for (const catUrl of categories) {
    test(`all card links on ${catUrl} resolve`, async ({ page, request }) => {
      await page.goto(catUrl);
      const hrefs = await page.locator('.cat-card').evaluateAll(cards =>
        cards.map(c => c.getAttribute('href'))
      );
      expect(hrefs.length).toBeGreaterThan(0);
      for (const href of hrefs) {
        const fullUrl = new URL(href, page.url()).pathname;
        const resp = await request.get(fullUrl);
        expect(resp.status(), `Link ${fullUrl} should resolve`).toBe(200);
      }
    });
  }

  test('related category links resolve', async ({ page, request }) => {
    await page.goto('/categories/fire-and-plasma/');
    const relatedLinks = await page.locator('h3:has-text("Related Categories") ~ ul a, h3:has-text("Related Categories") + ul a').evaluateAll(links =>
      links.map(a => a.getAttribute('href'))
    );
    for (const href of relatedLinks) {
      const fullUrl = new URL(href, page.url()).pathname;
      const resp = await request.get(fullUrl);
      expect(resp.status(), `Related link ${fullUrl} should resolve`).toBe(200);
    }
  });
});

// ── Build page links resolve ──

test.describe('Build Page Links', () => {
  test('See Also links resolve on sample builds', async ({ page, request }) => {
    for (const buildUrl of SAMPLE_BUILDS.slice(0, 3)) {
      await page.goto(buildUrl);
      const seeAlsoSection = page.locator('h2:has-text("See Also")');
      if (await seeAlsoSection.count() === 0) continue;

      const links = await page.locator('h2:has-text("See Also") ~ ul a, h2:has-text("See Also") + ul a').evaluateAll(els =>
        els.map(a => a.getAttribute('href')).filter(h => h && !h.startsWith('http'))
      );
      for (const href of links) {
        const fullUrl = new URL(href, page.url()).pathname;
        const resp = await request.get(fullUrl);
        expect(resp.status(), `See Also link ${fullUrl} from ${buildUrl}`).toBe(200);
      }
    }
  });

  test('breadcrumb links resolve', async ({ page, request }) => {
    await page.goto(SAMPLE_BUILDS[0]);
    const links = await page.locator('.breadcrumb a').evaluateAll(els =>
      els.map(a => a.getAttribute('href'))
    );
    for (const href of links) {
      const resp = await request.get(href);
      expect(resp.status(), `Breadcrumb link ${href}`).toBe(200);
    }
  });

  test('prev/next navigation links resolve', async ({ page, request }) => {
    // First build — should have next
    await page.goto(SAMPLE_BUILDS[0]);
    const nextLink = page.locator('a.nav-next');
    if (await nextLink.count() > 0) {
      const nextHref = await nextLink.getAttribute('href');
      const resp = await request.get(nextHref);
      expect(resp.status(), `Next link ${nextHref}`).toBe(200);
    }

    // Last build — should have prev (prev link has no class, it's the first <a> in .build-nav)
    await page.goto(SAMPLE_BUILDS[4]);
    const prevLink = page.locator('.build-nav a:not(.nav-next)');
    if (await prevLink.count() > 0) {
      const prevHref = await prevLink.first().getAttribute('href');
      const resp = await request.get(prevHref);
      expect(resp.status(), `Prev link ${prevHref}`).toBe(200);
    }
  });
});

// ── Navigation links ──

test.describe('Navigation Links', () => {
  test('all nav links resolve', async ({ page, request }) => {
    await page.goto('/');
    const links = await page.locator('#header nav a').evaluateAll(els =>
      els.map(a => a.getAttribute('href')).filter(h => h && h.startsWith('/'))
    );
    for (const href of links) {
      const resp = await request.get(href);
      expect(resp.status(), `Nav link ${href}`).toBe(200);
    }
  });
});
