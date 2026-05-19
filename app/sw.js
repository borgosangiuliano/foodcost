// FoodCost 360 — Service Worker
// Versione minimale: serve solo per abilitare l'installazione PWA
// Non fa cache aggressiva per non servire versioni vecchie dei tool

var CACHE_NAME = 'fc360-v1';

// Installa SW
self.addEventListener('install', function(e){
  self.skipWaiting();
});

// Attiva SW
self.addEventListener('activate', function(e){
  e.waitUntil(clients.claim());
});

// Fetch: network-first per tutto
// Se offline, prova la cache solo per la dashboard
self.addEventListener('fetch', function(e){
  var url = e.request.url;

  // Per le richieste Supabase e API — sempre network
  if(url.includes('supabase.co') || url.includes('googleapis') || url.includes('fonts')){
    return; // passa al browser
  }

  // Network-first per tutti i file HTML e JS
  e.respondWith(
    fetch(e.request).catch(function(){
      // Offline fallback: serve solo la dashboard se in cache
      return caches.match(e.request);
    })
  );
});
