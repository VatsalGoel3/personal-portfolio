const CACHE_NAME = 'portfolio-cache-v1';
const urlsToCache = [
  '/',
  '/projects',
  '/experience',
  '/contact',
  '/Vatsal_Goel_Resume.pdf',
  // Add other static assets
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
}); 