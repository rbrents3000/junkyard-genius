const { test, expect } = require('@playwright/test');
const { ALL_CATEGORIES, CATEGORY_BUILD_COUNTS } = require('./helpers');

// ── All 33 categories load ──

test.describe('Category Pages — Status', () => {
  for (const slug of ALL_CATEGORIES) {
    test(`/categories/${slug}/ returns 200`, async ({ request }) => {
      const resp = await request.get(`/categories/${slug}/`);
      expect(resp.status()).toBe(200);
    });
  }
});

// ── Structural spot-checks ──

test.describe('Category Page Structure — fire-and-plasma', () => {
  const URL = '/categories/fire-and-plasma/';
  const EXPECTED_COUNT = 8;

  test('has page title', async ({ page }) => {
    await page.goto(URL);
    await expect(page).toHaveTitle(/Fire.*Plasma|Junkyard/);
  });

  test('has meta description', async ({ page }) => {
    await page.goto(URL);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.+/);
  });

  test('has OG tags', async ({ page }) => {
    await page.goto(URL);
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /.+/);
  });

  test('has canonical URL', async ({ page }) => {
    await page.goto(URL);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /categories\/fire-and-plasma/);
  });

  test('has .cat-card-grid container', async ({ page }) => {
    await page.goto(URL);
    await expect(page.locator('.cat-card-grid')).toHaveCount(1);
  });

  test(`has ${EXPECTED_COUNT} .cat-card elements`, async ({ page }) => {
    await page.goto(URL);
    await expect(page.locator('.cat-card')).toHaveCount(EXPECTED_COUNT);
  });

  test('each card has build number badge', async ({ page }) => {
    await page.goto(URL);
    const nums = page.locator('.cc-num');
    await expect(nums).toHaveCount(EXPECTED_COUNT);
    for (const num of await nums.all()) {
      await expect(num).toHaveText(/#\d+/);
    }
  });

  test('each card has build name', async ({ page }) => {
    await page.goto(URL);
    const names = page.locator('.cc-name');
    await expect(names).toHaveCount(EXPECTED_COUNT);
    for (const name of await names.all()) {
      const text = await name.textContent();
      expect(text.trim().length).toBeGreaterThan(0);
    }
  });

  test('each card has 6 rating bars', async ({ page }) => {
    await page.goto(URL);
    const cards = page.locator('.cat-card');
    for (const card of await cards.all()) {
      const ratings = card.locator('.cc-r');
      await expect(ratings).toHaveCount(6);
    }
  });

  test('rating bars have all 6 labels', async ({ page }) => {
    await page.goto(URL);
    const firstCard = page.locator('.cat-card').first();
    const labels = await firstCard.locator('.cc-l').allTextContents();
    expect(labels.map(l => l.trim().toLowerCase())).toEqual(
      expect.arrayContaining(['jaw', 'brain', 'wallet', 'spicy', 'clout', 'time'])
    );
  });

  test('card links point to valid relative paths', async ({ page }) => {
    await page.goto(URL);
    const cards = page.locator('.cat-card');
    for (const card of await cards.all()) {
      const href = await card.getAttribute('href');
      expect(href).toMatch(/^\d{3}-[a-z0-9-]+\/$/);
    }
  });

  test('has Suggested Build Order section', async ({ page }) => {
    await page.goto(URL);
    const heading = page.locator('h3:has-text("Suggested Build Order")');
    await expect(heading).toBeVisible();
  });

  test('has Related Categories section', async ({ page }) => {
    await page.goto(URL);
    const heading = page.locator('h3:has-text("Related Categories")');
    await expect(heading).toBeVisible();
  });
});

test.describe('Category Page Structure — pi-and-arduino (largest)', () => {
  test('has 20 cat-cards', async ({ page }) => {
    await page.goto('/categories/pi-and-arduino/');
    await expect(page.locator('.cat-card')).toHaveCount(20);
  });

  test('loads with correct title', async ({ page }) => {
    await page.goto('/categories/pi-and-arduino/');
    await expect(page).toHaveTitle(/.+/);
  });
});

test.describe('Category Page Structure — laser-lab (smallest)', () => {
  test('has 7 cat-cards', async ({ page }) => {
    await page.goto('/categories/laser-lab/');
    await expect(page.locator('.cat-card')).toHaveCount(7);
  });
});

// ── Verify all categories have correct card counts ──

test.describe('Category card counts match expected', () => {
  const spotCheckCategories = [
    'household-chemistry',
    'chemical-electronic',
    'python-projects',
    'light-and-visual',
    'mechanical-and-kinetic',
  ];

  for (const slug of spotCheckCategories) {
    test(`${slug} has ${CATEGORY_BUILD_COUNTS[slug]} cards`, async ({ page }) => {
      await page.goto(`/categories/${slug}/`);
      await expect(page.locator('.cat-card')).toHaveCount(CATEGORY_BUILD_COUNTS[slug]);
    });
  }
});
