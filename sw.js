// CIPROS Cursos — service worker simples: mostra uma página própria quando não há internet.
const C = 'cipros-v1', OFF = '/offline.html';
self.addEventListener('install', e => { e.waitUntil(caches.open(C).then(c => c.addAll([OFF, '/icon-192.png']))); self.skipWaiting(); });
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') e.respondWith(fetch(e.request).catch(() => caches.match(OFF)));
});
