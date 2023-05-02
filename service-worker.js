const cacheName = "my-cache";

// Add the files to cache when installing the service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/styles.css",
        "/app.js",
        "/offline.html", // Add an offline fallback page
      ]);
    })
  );
});

// Serve cached files when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // If the file is cached, return it
      if (response) {
        return response;
      }

      // Otherwise, fetch the file from the network
      return fetch(event.request).catch(() => {
        // If the network is offline, return the offline fallback page
        return caches.match("/offline.html");
      });
    })
  );
});
