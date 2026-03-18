const CACHE = "watch-swipe-cache-v7"; // change v7 -> v8 each time you redeploy

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./script.js",
        "./manifest.json"
      ])
    )
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    // Delete old caches
    const keys = await caches.keys();
    await Promise.all(keys.map(k => (k !== CACHE ? caches.delete(k) : null)));
    await self.clients.claim();
  })());
});

// Cache-first for same-origin requests (images/css/js) + offline fallback
self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle your own site (important)
  if (url.origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE);

    // 1) Try cache
    const cached = await cache.match(req);
    if (cached) return cached;

    // 2) Fetch from network, then cache it
    try {
      const fresh = await fetch(req);
      // Only cache successful basic responses
      if (fresh && fresh.status === 200 && fresh.type === "basic") {
        cache.put(req, fresh.clone());
      }
      return fresh;
    } catch (e) {
      // 3) Offline fallback for navigation
      if (req.mode === "navigate") {
        return cache.match("./index.html");
      }
      throw e;
    }
  })());
});
