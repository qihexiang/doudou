const cacheName = 'doudou'
const cacheFiles = [
    './index.html', './256x256.png'
]
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(cacheFiles))
    )
})