const { test, expect } = require('@playwright/test');
const { loadBuildData, SAMPLE_BUILDS } = require('./helpers');

const BUILDS = loadBuildData();

// ── All 338 builds return 200 ──

test.describe('All Build Pages — Status', () => {
  // Split into batches for parallel execution
  const BATCH_SIZE = 50;
  const batches = [];
  for (let i = 0; i < BUILDS.length; i += BATCH_SIZE) {
    batches.push(BUILDS.slice(i, i + BATCH_SIZE));
  }

  batches.forEach((batch, idx) => {
    const start = idx * BATCH_SIZE + 1;
    const end = Math.min(start + BATCH_SIZE - 1, BUILDS.length);

    test(`builds ${start}-${end} all return 200`, async ({ request }) => {
      const failures = [];
      for (const build of batch) {
        const url = `/categories/${build.category}/${build.slug}/`;
        const resp = await request.get(url);
        if (resp.status() !== 200) {
          failures.push(`${resp.status()} ${url}`);
        }
      }
      expect(failures, `Failed URLs:\n${failures.join('\n')}`).toEqual([]);
    });
  });
});

// ── Structural spot-checks ──

test.describe('Build Page Structural Checks', () => {
  for (const buildUrl of SAMPLE_BUILDS) {
    test(`${buildUrl} has required sections`, async ({ page }) => {
      await page.goto(buildUrl);

      // What Is It section
      const whatIsIt = page.locator('h2:has-text("What Is It")');
      await expect(whatIsIt).toBeVisible();

      // Build Steps section
      const buildSteps = page.locator('h2:has-text("Build Steps")');
      await expect(buildSteps).toBeVisible();

      // Safety Notes section
      const safety = page.locator('h2:has-text("Safety")');
      await expect(safety).toBeVisible();
    });

    test(`${buildUrl} has Ingredients section`, async ({ page }) => {
      await page.goto(buildUrl);
      const ingredients = page.locator('summary:has-text("Ingredients")');
      await expect(ingredients).toBeVisible();
    });

    test(`${buildUrl} has Ratings badges`, async ({ page }) => {
      await page.goto(buildUrl);
      const badges = page.locator('img[src*="shields.io"]');
      const count = await badges.count();
      expect(count).toBeGreaterThanOrEqual(6);
    });
  }
});

// ── Build data integrity ──

test.describe('Build Data Integrity', () => {
  test('build-data.js has exactly 338 builds', async () => {
    expect(BUILDS.length).toBe(338);
  });

  test('every build has required fields', async () => {
    for (const build of BUILDS) {
      expect(build.num, `Build missing num`).toBeDefined();
      expect(build.name, `Build ${build.num} missing name`).toBeTruthy();
      expect(build.slug, `Build ${build.num} missing slug`).toBeTruthy();
      expect(build.category, `Build ${build.num} missing category`).toBeTruthy();
      expect(build.jaw, `Build ${build.num} missing jaw`).toBeDefined();
      expect(build.brain, `Build ${build.num} missing brain`).toBeDefined();
      expect(build.wallet, `Build ${build.num} missing wallet`).toBeDefined();
      expect(build.spicy, `Build ${build.num} missing spicy`).toBeDefined();
      expect(build.clout, `Build ${build.num} missing clout`).toBeDefined();
      expect(build.time, `Build ${build.num} missing time`).toBeDefined();
    }
  });

  test('build numbers are sequential 1-338', async () => {
    const nums = BUILDS.map(b => b.num).sort((a, b) => a - b);
    expect(nums[0]).toBe(1);
    expect(nums[nums.length - 1]).toBe(338);
    expect(new Set(nums).size).toBe(338);
  });

  test('all ratings are between 1 and 5', async () => {
    for (const build of BUILDS) {
      for (const key of ['jaw', 'brain', 'wallet', 'spicy', 'clout', 'time']) {
        expect(build[key], `Build ${build.num} ${key}=${build[key]}`).toBeGreaterThanOrEqual(1);
        expect(build[key], `Build ${build.num} ${key}=${build[key]}`).toBeLessThanOrEqual(5);
      }
    }
  });
});
