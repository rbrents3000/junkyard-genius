const fs = require('fs');
const path = require('path');

// All 33 category slugs
const ALL_CATEGORIES = [
  'alchemist-cookbook', 'art-and-installation', 'big-builds',
  'chemical-electronic', 'computer-and-phone', 'drone-salvage',
  'fire-and-plasma', 'fridge-and-cooling', 'functional-machines',
  'household-chemistry', 'humidifier-and-water', 'junk-instruments',
  'junkyard-auto', 'kitchen-hacks', 'laser-lab',
  'light-and-visual', 'mad-scientist', 'mechanical-and-kinetic',
  'pi-and-arduino', 'power-and-energy', 'power-tools-remixed',
  'pranks-and-party', 'printer-and-scanner', 'pyro-and-chemistry',
  'python-projects', 'scooter-and-motor', 'sound-and-music',
  'survival-off-grid', 'unholy-combos', 'vacuum-cleaner',
  'visual-showstoppers', 'wearable-tech', 'weird-science',
];

// Expected build counts per category
const CATEGORY_BUILD_COUNTS = {
  'alchemist-cookbook': 13,
  'art-and-installation': 8,
  'big-builds': 8,
  'chemical-electronic': 15,
  'computer-and-phone': 13,
  'drone-salvage': 8,
  'fire-and-plasma': 8,
  'fridge-and-cooling': 9,
  'functional-machines': 9,
  'household-chemistry': 16,
  'humidifier-and-water': 8,
  'junk-instruments': 8,
  'junkyard-auto': 8,
  'kitchen-hacks': 8,
  'laser-lab': 7,
  'light-and-visual': 19,
  'mad-scientist': 10,
  'mechanical-and-kinetic': 11,
  'pi-and-arduino': 20,
  'power-and-energy': 8,
  'power-tools-remixed': 8,
  'pranks-and-party': 8,
  'printer-and-scanner': 8,
  'pyro-and-chemistry': 20,
  'python-projects': 15,
  'scooter-and-motor': 8,
  'sound-and-music': 8,
  'survival-off-grid': 8,
  'unholy-combos': 8,
  'vacuum-cleaner': 8,
  'visual-showstoppers': 9,
  'wearable-tech': 8,
  'weird-science': 8,
};

// Design system expected RGB values
const DESIGN_TOKENS = {
  bg: 'rgb(19, 19, 24)',
  card: 'rgb(27, 27, 32)',
  border: 'rgb(89, 65, 57)',
  orange: 'rgb(255, 107, 53)',
  text: 'rgb(228, 225, 233)',
};

// Diverse sample builds for spot-checking
const SAMPLE_BUILDS = [
  '/categories/fire-and-plasma/001-plasma-tornado-lamp/',
  '/categories/pi-and-arduino/121-fireworks-sequencer/',
  '/categories/household-chemistry/213-bleach-crystal-garden/',
  '/categories/survival-off-grid/253-rocket-stove/',
  '/categories/visual-showstoppers/338-mechanical-flip-dot-display/',
];

// Parse build-data.js to get all build URLs
function loadBuildData() {
  const raw = fs.readFileSync(
    path.join(__dirname, '..', 'app', 'quiz', 'build-data.js'), 'utf-8'
  );
  const jsonStr = raw.replace(/^const BUILDS = /, '').replace(/;\s*$/, '');
  return JSON.parse(jsonStr);
}

// External domains to ignore in console error / resource checks
const EXTERNAL_IGNORE = [
  'googletagmanager.com',
  'google-analytics.com',
  'googleapis.com',
  'gstatic.com',
  'shields.io',
];

module.exports = {
  ALL_CATEGORIES,
  CATEGORY_BUILD_COUNTS,
  DESIGN_TOKENS,
  SAMPLE_BUILDS,
  EXTERNAL_IGNORE,
  loadBuildData,
};
