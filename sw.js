const CACHE_NAME = 'gym-offline-v19';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.webmanifest',
  './assets/cards/complex1.jpg',
  './assets/cards/complex2.jpg',
  './assets/cards/complex3.jpg',
  './assets/cards/complex4.jpg',
  './assets/exercises/complex1_1.jpg',
  './assets/exercises/complex1_2.jpg',
  './assets/exercises/complex1_3.jpg',
  './assets/exercises/complex1_4.jpg',
  './assets/exercises/complex1_5.jpg',
  './assets/exercises/complex1_6.jpg',
  './assets/exercises/complex2_1.jpg',
  './assets/exercises/complex2_2.jpg',
  './assets/exercises/complex2_3.jpg',
  './assets/exercises/complex2_4.jpg',
  './assets/exercises/complex2_5.jpg',
  './assets/exercises/complex2_6.jpg',
  './assets/exercises/complex3_1.jpg',
  './assets/exercises/complex3_2.jpg',
  './assets/exercises/complex3_3.jpg',
  './assets/exercises/complex3_4.jpg',
  './assets/exercises/complex3_5.jpg',
  './assets/exercises/complex3_6.jpg',
  './assets/exercises/complex4_1.jpg',
  './assets/exercises/complex4_2.jpg',
  './assets/exercises/complex4_3.jpg',
  './assets/exercises/complex4_4.jpg',
  './assets/exercises/complex4_5.jpg',
  './assets/exercises/complex4_6.jpg',
  './assets/icons/icon-180.png',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/brand/logo-gtt-blue.png',
  './assets/audio/default-background.mp3',
  './assets/audio/alt-background.mp3'
,  './assets/status/male_1.png'
,  './assets/status/male_2.png'
,  './assets/status/male_3.png'
,  './assets/status/male_4.png'
,  './assets/status/male_5.png'
,  './assets/status/female_1.png'
,  './assets/status/female_2.png'
,  './assets/status/female_3.png'
,  './assets/status/female_4.png'
,  './assets/status/female_5.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).then((resp) => {
      const copy = resp.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
      return resp;
    }).catch(() => caches.match('./index.html')))
  );
});
