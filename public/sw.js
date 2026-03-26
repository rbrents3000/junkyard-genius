var CACHE_NAME = 'jg-v7';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll([
        '/',
        '/offline.html',
        '/style.css',
        '/app/shared.js',
        '/app/browse/index.html',
        '/app/quiz/index.html',
        '/app/toolbox/index.html',
        '/app/quiz/build-data.js'
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.filter(function(name) { return name !== CACHE_NAME; })
             .map(function(name) { return caches.delete(name); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') return;

  // Only handle same-origin requests; let cross-origin (fonts, shields, GA) pass through
  var url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  var accept = event.request.headers.get('Accept') || '';

  // HTML pages: network-first
  if (accept.indexOf('text/html') !== -1) {
    event.respondWith(
      fetch(event.request).then(function(response) {
        if (response.ok) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, clone);
          });
        }
        return response;
      }).catch(function() {
        return caches.match(event.request).then(function(cached) {
          return cached || caches.match('/offline.html');
        });
      })
    );
    return;
  }

  // Assets: stale-while-revalidate
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      var fetchPromise = fetch(event.request).then(function(response) {
        if (response.ok) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, clone);
          });
        }
        return response;
      }).catch(function() { return cached; });
      return cached || fetchPromise;
    })
  );
});
