const CACHE_VERSION = "image-cache-v1"
const IMAGE_CACHE_NAME = `${CACHE_VERSION}`
const CDN_HOSTS = new Set(["cdn.jsdelivr.net"])
const IMAGE_EXTENSIONS = /\.(avif|bmp|gif|ico|jpe?g|png|svg|webp)$/i

const isImageRequest = (request) => {
  if (request.method !== "GET") {
    return false
  }

  if (request.destination === "image") {
    return true
  }

  try {
    const url = new URL(request.url)
    return IMAGE_EXTENSIONS.test(url.pathname)
  } catch {
    return false
  }
}

const shouldCacheRequest = (request) => {
  try {
    const url = new URL(request.url)
    return url.origin === self.location.origin || CDN_HOSTS.has(url.hostname)
  } catch {
    return false
  }
}

self.addEventListener("install", (event) => {
  self.skipWaiting()
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((cacheName) => cacheName.startsWith("image-cache-") && cacheName !== IMAGE_CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      )
    ).then(() => self.clients.claim())
  )
})

self.addEventListener("fetch", (event) => {
  const { request } = event

  if (!isImageRequest(request) || !shouldCacheRequest(request)) {
    return
  }

  event.respondWith(
    caches.open(IMAGE_CACHE_NAME).then(async (cache) => {
      const cachedResponse = await cache.match(request)
      if (cachedResponse) {
        return cachedResponse
      }

      try {
        const networkResponse = await fetch(request)
        if (networkResponse && (networkResponse.ok || networkResponse.type === "opaque")) {
          cache.put(request, networkResponse.clone())
        }
        return networkResponse
      } catch (error) {
        if (cachedResponse) {
          return cachedResponse
        }
        throw error
      }
    })
  )
})
