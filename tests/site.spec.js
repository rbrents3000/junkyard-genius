const { test, expect } = require('@playwright/test');

// ── Homepage ──

test.describe('Homepage', () => {
  test('loads and has correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Junkyard Genius/);
  });

  test('has navigation with key links', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('nav').first();
    await expect(nav.getByRole('link', { name: /browse/i }).first()).toBeVisible();
    await expect(nav.getByRole('link', { name: /quiz/i }).first()).toBeVisible();
    await expect(nav.getByRole('link', { name: /github/i }).first()).toBeVisible();
  });

  test('has skip link for accessibility', async ({ page }) => {
    await page.goto('/');
    const skip = page.locator('a.skip-link, a[href="#main"]');
    await expect(skip).toHaveCount(1);
  });

  test('has meta description', async ({ page }) => {
    await page.goto('/');
    const desc = page.locator('meta[name="description"]');
    await expect(desc).toHaveAttribute('content', /.+/);
  });

  test('has Open Graph tags', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /.+/);
  });
});

// ── Build Pages ──

test.describe('Build Pages', () => {
  const buildPaths = [
    '/categories/fire-and-plasma/001-plasma-tornado-lamp/',
    '/categories/survival-off-grid/253-rocket-stove/',
    '/categories/visual-showstoppers/338-mechanical-flip-dot-display/',
  ];

  for (const path of buildPaths) {
    test(`build page ${path} loads`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response.status()).toBe(200);
    });
  }

  test('build page has JSON-LD structured data', async ({ page }) => {
    await page.goto('/categories/fire-and-plasma/001-plasma-tornado-lamp/');
    const scripts = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(scripts.length).toBeGreaterThan(0);
    const jsonld = JSON.parse(scripts[0]);
    expect(jsonld['@type']).toBeDefined();
  });

  test('build page has breadcrumb navigation', async ({ page }) => {
    await page.goto('/categories/fire-and-plasma/001-plasma-tornado-lamp/');
    const breadcrumb = page.locator('nav[aria-label*="readcrumb"], .breadcrumb');
    await expect(breadcrumb).toBeVisible();
  });

  test('build page has prev/next navigation', async ({ page }) => {
    await page.goto('/categories/fire-and-plasma/001-plasma-tornado-lamp/');
    const buildNav = page.locator('nav[aria-label="Build navigation"]');
    await expect(buildNav).toBeVisible();
    const navLinks = buildNav.locator('a');
    const count = await navLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test('build page has tracker buttons', async ({ page }) => {
    await page.goto('/categories/fire-and-plasma/001-plasma-tornado-lamp/');
    const completed = page.locator('button:has-text("Completed"), button:has-text("completed")');
    const want = page.locator('button:has-text("Want"), button:has-text("want")');
    await expect(completed).toBeVisible();
    await expect(want).toBeVisible();
  });

  test('build page images have loading=lazy', async ({ page }) => {
    await page.goto('/categories/fire-and-plasma/001-plasma-tornado-lamp/');
    const images = await page.locator('img').all();
    for (const img of images) {
      await expect(img).toHaveAttribute('loading', 'lazy');
    }
  });

  test('build page has share buttons', async ({ page }) => {
    await page.goto('/categories/fire-and-plasma/001-plasma-tornado-lamp/');
    const share = page.locator('button:has-text("Copy Link"), button:has-text("copy"), .share-btn');
    await expect(share.first()).toBeVisible();
  });
});

// ── Browse Page ──

test.describe('Browse Page', () => {
  test('loads with all 338 builds', async ({ page }) => {
    await page.goto('/app/browse/');
    await expect(page).toHaveTitle(/Browse/);
    const count = page.locator('#resultCount');
    await expect(count).toContainText('338');
  });

  test('has search box', async ({ page }) => {
    await page.goto('/app/browse/');
    const search = page.locator('#searchBox');
    await expect(search).toBeVisible();
  });

  test('search filters builds', async ({ page }) => {
    await page.goto('/app/browse/');
    const search = page.locator('#searchBox');
    await search.fill('plasma');
    await page.waitForTimeout(500);
    const count = page.locator('#resultCount');
    await expect(count).not.toContainText('Showing 338');
  });

  test('sort pills show direction arrows', async ({ page }) => {
    await page.goto('/app/browse/');
    const activePill = page.locator('.sort-pill.active');
    const text = await activePill.textContent();
    expect(text).toMatch(/[↑↓]/);
  });

  test('clicking sort pill toggles direction', async ({ page }) => {
    await page.goto('/app/browse/');
    const numPill = page.locator('.sort-pill[data-sort="num"]');
    const text1 = await numPill.textContent();
    await numPill.click();
    const text2 = await numPill.textContent();
    expect(text1).not.toBe(text2);
  });

  test('category filter works', async ({ page }) => {
    await page.goto('/app/browse/');
    const catSelect = page.locator('#categoryFilter');
    // Select by value instead of index
    const options = await catSelect.locator('option').all();
    expect(options.length).toBeGreaterThan(1);
    const secondOption = await options[1].getAttribute('value');
    await catSelect.selectOption(secondOption);
    await page.waitForTimeout(200);
    const count = page.locator('#resultCount');
    await expect(count).not.toContainText('Showing 338');
  });

  test('has correct lang attribute', async ({ page }) => {
    await page.goto('/app/browse/');
    const lang = await page.locator('html').getAttribute('lang');
    expect(lang).toBe('en-US');
  });

  test('has canonical URL', async ({ page }) => {
    await page.goto('/app/browse/');
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', /junkyard\.build\/app\/browse/);
  });

  test('build cards link to valid pages', async ({ page }) => {
    await page.goto('/app/browse/');
    const firstCard = page.locator('.build-card').first();
    const href = await firstCard.getAttribute('href');
    expect(href).toMatch(/categories\//);
  });
});

// ── Quiz Page ──

test.describe('Quiz Page', () => {
  test('loads with welcome screen', async ({ page }) => {
    await page.goto('/app/quiz/');
    await expect(page).toHaveTitle(/Quiz/);
    const startBtn = page.locator('.btn-start');
    await expect(startBtn).toBeVisible();
  });

  test('has site navigation visible before quiz starts', async ({ page }) => {
    await page.goto('/app/quiz/');
    const nav = page.locator('nav').first();
    await expect(nav).toBeVisible();
  });

  test('quiz starts and shows first question', async ({ page }) => {
    await page.goto('/app/quiz/');
    await page.locator('.btn-start').click();
    await page.waitForTimeout(500);
    const optionCard = page.locator('.option-card');
    await expect(optionCard.first()).toBeVisible({ timeout: 5000 });
  });

  test('can complete full quiz', async ({ page }) => {
    await page.goto('/app/quiz/');
    await page.locator('.btn-start').click();

    // 6 questions: Q1,Q2 single-select (auto-advance), Q3 multi-select (needs Next),
    // Q4,Q5 single-select (auto-advance), Q6 single-select (auto-calls showResults)
    for (let i = 0; i < 6; i++) {
      const option = page.locator('.option-card:visible').first();
      await expect(option).toBeVisible({ timeout: 5000 });
      await option.click();
      await page.waitForTimeout(400);

      // Multi-select questions need explicit "Next" click
      const nextBtn = page.locator('button:visible:not([disabled]):has-text("Next")');
      if (await nextBtn.isVisible({ timeout: 500 }).catch(() => false)) {
        await nextBtn.click();
      }
      await page.waitForTimeout(400);
    }

    // Should show results
    await page.waitForTimeout(1000);
    const resultsVisible = await page.locator('.results-section').isVisible().catch(() => false);
    const resultCardVisible = await page.locator('.result-card').first().isVisible().catch(() => false);
    expect(resultsVisible || resultCardVisible).toBe(true);
  });

  test('has correct lang attribute', async ({ page }) => {
    await page.goto('/app/quiz/');
    const lang = await page.locator('html').getAttribute('lang');
    expect(lang).toBe('en-US');
  });
});

// ── Toolbox Page ──

test.describe('Toolbox Page', () => {
  test('loads with empty state', async ({ page }) => {
    await page.goto('/app/toolbox/');
    await expect(page).toHaveTitle(/Toolbox/);
  });

  test('has noindex meta tag', async ({ page }) => {
    await page.goto('/app/toolbox/');
    const robots = page.locator('meta[name="robots"]');
    await expect(robots).toHaveAttribute('content', /noindex/);
  });

  test('shows dash for empty avg difficulty', async ({ page }) => {
    await page.goto('/app/toolbox/');
    await page.evaluate(() => {
      localStorage.removeItem('jg-completed');
      localStorage.removeItem('jg-wantToBuild');
    });
    await page.reload();
    const stats = page.locator('#stats');
    const text = await stats.textContent();
    expect(text).toContain('—');
  });

  test('tabs switch between completed and want-to-build', async ({ page }) => {
    await page.goto('/app/toolbox/');
    const wantTab = page.locator('.tab[data-tab="want"]');
    await wantTab.click();
    await expect(wantTab).toHaveClass(/active/);
  });

  test('has correct lang attribute', async ({ page }) => {
    await page.goto('/app/toolbox/');
    const lang = await page.locator('html').getAttribute('lang');
    expect(lang).toBe('en-US');
  });
});

// ── 404 Page ──

test.describe('404 Page', () => {
  test('shows 404 content for non-existent page', async ({ page }) => {
    await page.goto('/this-does-not-exist/');
    const content = await page.textContent('body');
    expect(content.toLowerCase()).toContain('scrapped');
  });
});

// ── Sitemap ──

test.describe('Sitemap', () => {
  test('exists and has lastmod tags', async ({ page }) => {
    const response = await page.goto('/sitemap.xml');
    expect(response.status()).toBe(200);
    const content = await page.content();
    expect(content).toContain('<urlset');
    expect(content).toContain('<loc>');
    expect(content).toContain('<lastmod>');
  });

  test('does not include .github pages', async ({ page }) => {
    await page.goto('/sitemap.xml');
    const content = await page.content();
    expect(content).not.toContain('.github');
  });

  test('does not include offline page', async ({ page }) => {
    await page.goto('/sitemap.xml');
    const content = await page.content();
    expect(content).not.toContain('offline');
  });
});

// ── Static files ──

test.describe('Static Files', () => {
  test('offline.html exists', async ({ page }) => {
    const response = await page.goto('/offline.html');
    expect(response.status()).toBe(200);
    const content = await page.textContent('body');
    expect(content.toLowerCase()).toContain('offline');
  });

  test('sw.js is accessible and current version', async ({ page }) => {
    const response = await page.goto('/sw.js');
    expect(response.status()).toBe(200);
    const content = await page.textContent('body');
    expect(content).toContain('jg-v5');
  });

  test('robots.txt exists', async ({ page }) => {
    const response = await page.goto('/robots.txt');
    expect(response.status()).toBe(200);
  });

  test('manifest.json exists', async ({ page }) => {
    const response = await page.goto('/manifest.json');
    expect(response.status()).toBe(200);
  });
});

// ── SEO across pages ──

test.describe('SEO & Meta', () => {
  const pages = [
    { path: '/', name: 'Homepage' },
    { path: '/app/browse/', name: 'Browse' },
    { path: '/app/quiz/', name: 'Quiz' },
  ];

  for (const { path, name } of pages) {
    test(`${name} has OG tags`, async ({ page }) => {
      await page.goto(path);
      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /.+/);
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /.+/);
    });
  }
});

// ── Accessibility ──

test.describe('Accessibility', () => {
  test('focus-visible styles are present', async ({ page }) => {
    await page.goto('/app/browse/');
    const styles = await page.evaluate(() => {
      const sheets = document.styleSheets;
      for (const sheet of sheets) {
        try {
          for (const rule of sheet.cssRules) {
            if (rule.selectorText && rule.selectorText.includes('focus-visible')) {
              return true;
            }
          }
        } catch (e) { /* cross-origin sheet */ }
      }
      return false;
    });
    expect(styles).toBe(true);
  });

  test('all images have alt attribute', async ({ page }) => {
    await page.goto('/categories/fire-and-plasma/001-plasma-tornado-lamp/');
    const images = await page.locator('img').all();
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      expect(alt).not.toBeNull();
    }
  });
});

// ── localStorage integration ──

test.describe('Build Tracker', () => {
  test('marking a build as completed persists across pages', async ({ page }) => {
    await page.goto('/categories/fire-and-plasma/001-plasma-tornado-lamp/');
    // Click the completed button
    const completedBtn = page.locator('button:has-text("Completed")').first();
    await completedBtn.click();
    await page.waitForTimeout(300);

    // Navigate to toolbox and check
    await page.goto('/app/toolbox/');
    const stats = page.locator('#stats');
    const text = await stats.textContent();
    // Should show at least 1 completed
    expect(text).toContain('1');

    // Clean up
    await page.evaluate(() => {
      localStorage.removeItem('jg-completed');
      localStorage.removeItem('jg-wantToBuild');
    });
  });
});

// ── Redesigned Layout ──

test.describe('Build Page — Redesigned Layout', () => {
  const URL = '/categories/fire-and-plasma/001-plasma-tornado-lamp/';

  test('has hero section with title and build number', async ({ page }) => {
    await page.goto(URL);
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
  });

  test('has two-column layout (article + sidebar)', async ({ page }) => {
    await page.goto(URL);
    const article = page.locator('article.build-content');
    const sidebar = page.locator('aside.build-sidebar');
    await expect(article).toBeVisible();
    await expect(sidebar).toBeVisible();
  });

  test('sidebar has Specifications heading', async ({ page }) => {
    await page.goto(URL);
    const specsHeading = page.locator('.build-sidebar h2:has-text("Specifications")');
    await expect(specsHeading).toBeVisible();
  });

  test('sidebar has rating bars', async ({ page }) => {
    await page.goto(URL);
    const ratingBars = page.locator('.build-sidebar .flex.gap-1');
    const count = await ratingBars.count();
    expect(count).toBe(6);
  });

  test('sidebar has materials checklist', async ({ page }) => {
    await page.goto(URL);
    const materialsHeading = page.locator('.build-sidebar h2:has-text("Materials")');
    await expect(materialsHeading).toBeVisible();
    const checkboxes = page.locator('.build-sidebar input[type="checkbox"]');
    const count = await checkboxes.count();
    expect(count).toBeGreaterThan(0);
  });
});

test.describe('Category Page — Redesigned Layout', () => {
  test('has card grid with build images', async ({ page }) => {
    await page.goto('/categories/fire-and-plasma/');
    const grid = page.locator('.cat-grid');
    await expect(grid).toBeVisible();
    const cards = page.locator('.cat-build-card');
    const count = await cards.count();
    expect(count).toBe(8);
    const img = cards.first().locator('img');
    await expect(img).toBeVisible();
  });
});
