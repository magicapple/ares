var CACHE_NAME = "ares-cache-v1";
var urlsToCache = ["/", "/styles/main.css", "/script/main.js"];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.add("/");
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).then((response) => {
          let responseClone = response.clone();
          caches.open("my-cache").then((cache) => {
            cache.put(event.request, responseClone);
          });

          return response;
        })
      );
    })
  );
});