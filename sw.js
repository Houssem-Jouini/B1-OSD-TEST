// Service Worker for Zertifikat B1 Prüfungssimulation
const CACHE_NAME = 'b1-osd-app-v1.7';

const STATIC_ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './aiTutor.js',
  './testsData.js',
  './translationsData.js',
  './vocabularyData.js',
  './explanationsData.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon.png'
];

// Install: Cache all essential core assets
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('Some non-critical assets failed to cache:', err);
      });
    })
  );
});

// Activate: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Stale-While-Revalidate for local assets, Network-first for external/audio
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Skip non-GET requests
  if (req.method !== 'GET') return;

  // Handle local app assets
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(req).then((cachedResponse) => {
        // Fetch from network in background to update cache
        const fetchPromise = fetch(req).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(req, responseToCache);
            });
          }
          return networkResponse;
        }).catch(() => cachedResponse);

        // Return cached immediately if available, otherwise wait for network
        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  // External assets (e.g. Google Fonts or CDN): Cache-falling back to network
  event.respondWith(
    caches.match(req).then((cached) => {
      return cached || fetch(req).then((resp) => {
        if (resp && resp.status === 200 && (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com'))) {
          const respClone = resp.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, respClone));
        }
        return resp;
      }).catch(() => cached);
    })
  );
});
