const { test, expect } = require('@playwright/test');
const { DESIGN_TOKENS } = require('./helpers');

// ── Design System Variables ──

test.describe('CSS Design System', () => {
  test('root has CSS custom properties defined', async ({ page }) => {
    await page.goto('/');
    const vars = await page.evaluate(() => {
      const style = getComputedStyle(document.documentElement);
      return {
        bg: style.getPropertyValue('--bg').trim(),
        card: style.getPropertyValue('--card').trim(),
        border: style.getPropertyValue('--border').trim(),
        orange: style.getPropertyValue('--orange').trim(),
        text: style.getPropertyValue('--text').trim(),
        radius: style.getPropertyValue('--radius').trim(),
      };
    });
    expect(vars.bg).not.toBe('');
    expect(vars.card).not.toBe('');
    expect(vars.border).not.toBe('');
    expect(vars.orange).not.toBe('');
    expect(vars.text).not.toBe('');
    expect(vars.radius).not.toBe('');
  });

  test('body has dark background', async ({ page }) => {
    await page.goto('/');
    const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    expect(bg).toBe(DESIGN_TOKENS.bg);
  });

  test('body uses Inter font family', async ({ page }) => {
    await page.goto('/');
    const font = await page.evaluate(() => getComputedStyle(document.body).fontFamily);
    expect(font.toLowerCase()).toContain('inter');
  });

  test('body text color is light', async ({ page }) => {
    await page.goto('/');
    const color = await page.evaluate(() => getComputedStyle(document.body).color);
    expect(color).toBe(DESIGN_TOKENS.text);
  });
});

// ── Category Page Card Rendering ──

test.describe('Category Card Rendering', () => {
  const URL = '/categories/fire-and-plasma/';

  test('.cat-card-grid has display:grid', async ({ page }) => {
    await page.goto(URL);
    const display = await page.evaluate(() =>
      getComputedStyle(document.querySelector('.cat-card-grid')).display
    );
    expect(display).toBe('grid');
  });

  test('.cat-card-grid has grid-template-columns', async ({ page }) => {
    await page.goto(URL);
    const cols = await page.evaluate(() =>
      getComputedStyle(document.querySelector('.cat-card-grid')).gridTemplateColumns
    );
    expect(cols).not.toBe('none');
  });

  test('.cat-card has card background', async ({ page }) => {
    await page.goto(URL);
    const bg = await page.evaluate(() =>
      getComputedStyle(document.querySelector('.cat-card')).backgroundColor
    );
    expect(bg).toBe(DESIGN_TOKENS.card);
  });

  test('.cat-card has border', async ({ page }) => {
    await page.goto(URL);
    const border = await page.evaluate(() => {
      const s = getComputedStyle(document.querySelector('.cat-card'));
      return { width: s.borderWidth, style: s.borderStyle };
    });
    expect(border.style).toContain('solid');
    expect(border.width).not.toBe('0px');
  });

  test('.cat-card has border-radius', async ({ page }) => {
    await page.goto(URL);
    const radius = await page.evaluate(() =>
      getComputedStyle(document.querySelector('.cat-card')).borderRadius
    );
    expect(radius).not.toBe('0px');
  });

  test('.cat-card has padding', async ({ page }) => {
    await page.goto(URL);
    const padding = await page.evaluate(() =>
      getComputedStyle(document.querySelector('.cat-card')).padding
    );
    expect(padding).not.toBe('0px');
  });

  test('.cc-fill rating bars have non-zero width', async ({ page }) => {
    await page.goto(URL);
    const fills = page.locator('.cc-fill');
    const first3 = await fills.all();
    for (const fill of first3.slice(0, 3)) {
      const box = await fill.boundingBox();
      expect(box).not.toBeNull();
      expect(box.width).toBeGreaterThan(0);
    }
  });

  test('.cc-num badge has orange color', async ({ page }) => {
    await page.goto(URL);
    const color = await page.evaluate(() =>
      getComputedStyle(document.querySelector('.cc-num')).color
    );
    expect(color).toBe(DESIGN_TOKENS.orange);
  });

  test('.cc-l labels are uppercase', async ({ page }) => {
    await page.goto(URL);
    const transform = await page.evaluate(() =>
      getComputedStyle(document.querySelector('.cc-l')).textTransform
    );
    expect(transform).toBe('uppercase');
  });
});

// ── Build Page Rendering ──

test.describe('Build Page Rendering', () => {
  const URL = '/categories/fire-and-plasma/001-plasma-tornado-lamp/';

  test('.breadcrumb has card-style background', async ({ page }) => {
    await page.goto(URL);
    const bg = await page.evaluate(() =>
      getComputedStyle(document.querySelector('.breadcrumb')).backgroundColor
    );
    expect(bg).not.toBe('rgba(0, 0, 0, 0)');
    expect(bg).not.toBe('transparent');
  });

  test('.build-nav has flex layout', async ({ page }) => {
    await page.goto(URL);
    const display = await page.evaluate(() =>
      getComputedStyle(document.querySelector('.build-nav')).display
    );
    expect(display).toBe('flex');
  });

  test('.tracker-btn has card styling', async ({ page }) => {
    await page.goto(URL);
    const bg = await page.evaluate(() =>
      getComputedStyle(document.querySelector('.tracker-btn')).backgroundColor
    );
    expect(bg).not.toBe('rgba(0, 0, 0, 0)');
    expect(bg).not.toBe('transparent');
  });

  test('.share-buttons has card background', async ({ page }) => {
    await page.goto(URL);
    const bg = await page.evaluate(() =>
      getComputedStyle(document.querySelector('.share-buttons')).backgroundColor
    );
    expect(bg).toBe(DESIGN_TOKENS.card);
  });

  test('headings use Inter font', async ({ page }) => {
    await page.goto(URL);
    const font = await page.evaluate(() =>
      getComputedStyle(document.querySelector('h1')).fontFamily
    );
    expect(font.toLowerCase()).toContain('inter');
  });
});

// ── App Page Rendering ──

test.describe('App Page Rendering', () => {
  test('browse page build cards are styled', async ({ page }) => {
    await page.goto('/app/browse/');
    // Skip the BOTD card (has transparent bg by design) — check a grid card
    const gridCard = page.locator('.build-grid .build-card').first();
    await expect(gridCard).toBeVisible();
    const bg = await page.evaluate(() =>
      getComputedStyle(document.querySelector('.build-grid .build-card')).backgroundColor
    );
    expect(bg).not.toBe('rgba(0, 0, 0, 0)');
  });

  test('browse page has grid layout', async ({ page }) => {
    await page.goto('/app/browse/');
    const display = await page.evaluate(() =>
      getComputedStyle(document.querySelector('.build-grid')).display
    );
    expect(display).toBe('grid');
  });

  test('quiz page has styled options when started', async ({ page }) => {
    await page.goto('/app/quiz/');
    await page.locator('.btn-start').click();
    await page.waitForTimeout(500);
    const option = page.locator('.option-card:visible').first();
    await expect(option).toBeVisible({ timeout: 5000 });
    const bg = await page.evaluate(() =>
      getComputedStyle(document.querySelector('.option-card')).backgroundColor
    );
    expect(bg).not.toBe('rgba(0, 0, 0, 0)');
  });

  test('toolbox page stats are styled', async ({ page }) => {
    await page.goto('/app/toolbox/');
    const stat = page.locator('.stat-card').first();
    await expect(stat).toBeVisible();
    const bg = await page.evaluate(() =>
      getComputedStyle(document.querySelector('.stat-card')).backgroundColor
    );
    expect(bg).not.toBe('rgba(0, 0, 0, 0)');
  });
});

// ── Navigation Rendering ──

test.describe('Navigation Rendering', () => {
  test('header nav links have styled borders', async ({ page }) => {
    await page.goto('/');
    const radius = await page.evaluate(() =>
      getComputedStyle(document.querySelector('#header nav ul li a')).borderRadius
    );
    expect(radius).not.toBe('0px');
  });
});
