self.addEventListener("install", event => {
    event.waitUntil(caches.open("manufacturing-webapp-shell").then(cache => cache.addAll([
        "/",
        "/index.html",
        "/css/app.css",
        "/js/platformShell.js"
    ])));
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
