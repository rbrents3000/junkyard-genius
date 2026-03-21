const { test, expect } = require('@playwright/test');
const { DESIGN_TOKENS } = require('./helpers');

// ── Design System Variables ──

test.describe('CSS Design System', () => {
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

  test('.cat-grid has display:grid', async ({ page }) => {
    await page.goto(URL);
    const display = await page.evaluate(() =>
      getComputedStyle(document.querySelector('.cat-grid')).display
    );
    expect(display).toBe('grid');
  });

  test('.cat-grid has grid-template-columns', async ({ page }) => {
    await page.goto(URL);
    const cols = await page.evaluate(() =>
      getComputedStyle(document.querySelector('.cat-grid')).gridTemplateColumns
    );
    expect(cols).not.toBe('none');
  });

  test('.cat-build-card has card background', async ({ page }) => {
    await page.goto(URL);
    const bg = await page.evaluate(() =>
      getComputedStyle(document.querySelector('.cat-build-card')).backgroundColor
    );
    expect(bg).not.toBe('rgba(0, 0, 0, 0)');
    expect(bg).not.toBe('transparent');
  });

  test('.cat-build-card has border', async ({ page }) => {
    await page.goto(URL);
    const border = await page.evaluate(() => {
      const s = getComputedStyle(document.querySelector('.cat-build-card'));
      return { width: s.borderWidth, style: s.borderStyle };
    });
    expect(border.style).toContain('solid');
    expect(border.width).not.toBe('0px');
  });

  test('.cat-build-card has rating bars with non-zero width', async ({ page }) => {
    await page.goto(URL);
    const bars = page.locator('.cat-build-card .flex.gap-1 span').first();
    const box = await bars.boundingBox();
    expect(box).not.toBeNull();
    expect(box.width).toBeGreaterThan(0);
  });

  test('card images have grayscale filter', async ({ page }) => {
    await page.goto(URL);
    const filter = await page.evaluate(() =>
      getComputedStyle(document.querySelector('.cat-build-card img')).filter
    );
    expect(filter).toContain('grayscale');
  });
});

// ── Build Page Rendering ──

test.describe('Build Page Rendering', () => {
  const URL = '/categories/fire-and-plasma/001-plasma-tornado-lamp/';

  test('breadcrumb has navigation role', async ({ page }) => {
    await page.goto(URL);
    const breadcrumb = page.locator('nav[aria-label*="readcrumb"]');
    await expect(breadcrumb).toBeVisible();
  });

  test('build navigation has flex layout', async ({ page }) => {
    await page.goto(URL);
    const display = await page.evaluate(() =>
      getComputedStyle(document.querySelector('nav[aria-label="Build navigation"]')).display
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

  test('.share-btn exists in sidebar', async ({ page }) => {
    await page.goto(URL);
    const shareBtn = page.locator('.build-sidebar .share-btn');
    const count = await shareBtn.count();
    expect(count).toBeGreaterThan(0);
  });

  test('headings use Space Grotesk font', async ({ page }) => {
    await page.goto(URL);
    const font = await page.evaluate(() =>
      getComputedStyle(document.querySelector('h1')).fontFamily
    );
    expect(font.toLowerCase()).toContain('space grotesk');
  });
});

// ── App Page Rendering ──

test.describe('App Page Rendering', () => {
  test('browse page build cards are styled', async ({ page }) => {
    await page.goto('/app/browse/');
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
  test('header nav links are visible', async ({ page }) => {
    await page.goto('/');
    const navLinks = page.locator('nav a');
    const count = await navLinks.count();
    expect(count).toBeGreaterThan(0);
  });
});
