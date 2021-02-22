const cacheName = 'doudouv4'
const cacheFiles = [
    '/doudou/', 
    './doudou.js', 
    './style.css', './media.css', 
    './16x16.png',
    './32x32.png',
    './48x48.png',
    './64x64.png',
    './128x128.png', 
    './256x256.png',
    './512x512.png'
]

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(cacheFiles))
    )
})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.open(cacheName).then(cache => {
            return cache.match(e.request).then(
                (cacheResponse) =>
                    cacheResponse ||
                    fetch(e.request).then((networkResponse) => {
                        cache.put(e.request, networkResponse.clone());
                        return networkResponse;
                    })
            );
        })
    );

});