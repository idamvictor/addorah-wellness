/* Addorah Wellness service worker: install support + offline fallback.
 * Pages are network-first (prices and stock stay fresh online); build assets and
 * images are cache-first (their URLs never change). The admin area, form posts and
 * Next.js data requests are never cached. Bump VERSION to drop old caches. */

const VERSION = "v1";
const PAGES = `addorah-pages-${VERSION}`;
const ASSETS = `addorah-assets-${VERSION}`;
const OFFLINE_URL = "/offline";
const PRECACHE = [OFFLINE_URL, "/icon.svg", "/app-icons/store-192.png"];
const MAX_PAGES = 40;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(PAGES)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== PAGES && key !== ASSETS).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

const isAdmin = (url) => url.pathname === "/admin" || url.pathname.startsWith("/admin/") || url.pathname.startsWith("/admin-manifest");
const isNextData = (request, url) =>
  request.headers.has("RSC") || request.headers.has("Next-Router-Prefetch") || url.searchParams.has("_rsc");
const isImmutableAsset = (url) =>
  url.pathname.startsWith("/_next/static/") ||
  url.pathname.startsWith("/images/") ||
  url.pathname.startsWith("/uploads/") ||
  url.pathname.startsWith("/app-icons/");

async function trimPages() {
  const cache = await caches.open(PAGES);
  const keys = await cache.keys();
  const extra = keys.filter((request) => !PRECACHE.includes(new URL(request.url).pathname)).slice(0, -MAX_PAGES);
  await Promise.all(extra.map((request) => cache.delete(request)));
}

async function networkFirstPage(request) {
  try {
    const response = await fetch(request);
    if (response.ok && response.type === "basic" && !response.redirected) {
      const copy = response.clone();
      caches.open(PAGES).then((cache) => cache.put(request, copy).then(trimPages));
    }
    return response;
  } catch {
    return (await caches.match(request, { ignoreSearch: false })) ?? (await caches.match(OFFLINE_URL)) ?? Response.error();
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok && response.type === "basic") {
    const copy = response.clone();
    caches.open(ASSETS).then((cache) => cache.put(request, copy));
  }
  return response;
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || isAdmin(url) || isNextData(request, url)) return;

  if (request.mode === "navigate") {
    event.respondWith(networkFirstPage(request));
  } else if (isImmutableAsset(url)) {
    event.respondWith(cacheFirst(request));
  }
});
