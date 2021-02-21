const cacheName = 'doudouv2'
const cacheFiles = [
    './', './doudou.js', './style.css', './media.css' ,'./256x256.png'
]
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(cacheFiles))
    )
})