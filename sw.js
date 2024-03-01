importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.2.1/workbox-sw.js');

if (workbox) {
  console.log('Workbox is loaded');

  workbox.core.skipWaiting();
  workbox.core.clientsClaim();

  workbox.precaching.precacheAndRoute([
    // Specify the URLs of assets to be precached
    { url: '/public/bundle.js', revision: 'd41d8cd98f00b204e9800998ecf8427e' },
    { url: '/public/index.html', revision: 'd8adbbb112a8ff1c68a3dce24db76b74' },
    { url: '/src/index.js', revision: 'd41d8cd98f00b204e9800998ecf8427e' },
    { url: '/src/style.css', revision: 'd41d8cd98f00b204e9800998ecf8427e' }
  ]);

  // Add additional routes or caching strategies as needed
} else {
  console.log('Workbox could not be loaded. No caching strategies will be used.');
}

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
