/**
 * Junkyard Genius — Shared Utilities
 * Used by browse, quiz, toolbox, and build pages.
 */

/** Build a URL path for a build object from build-data.js */
function buildUrl(build) {
  return "/categories/" + build.category + "/" + build.slug + "/";
}

/** Read a JSON array from localStorage (returns [] on error) */
function getList(key) {
  try { return JSON.parse(localStorage.getItem(key)) || []; }
  catch(e) { console.warn("localStorage error:", e); return []; }
}

/** Write a JSON array to localStorage */
function setList(key, arr) {
  localStorage.setItem(key, JSON.stringify(arr));
}
