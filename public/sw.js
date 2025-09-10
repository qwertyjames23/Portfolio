// Simple Service Worker for Portfolio Caching
const CACHE_NAME = 'portfolio-v1';
const urlsToCache = [
  '/',
  '/Portfolio/',
  '/Portfolio/about-me/',
  '/Portfolio/portfolio/',
  '/images/rjadamsprofile.webp',
  '/images/profile.jpg',
  '/favicon.ico'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
