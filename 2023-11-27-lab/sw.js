self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('static').then(function(cache) {
        return cache.addAll([
          './login.html',
           './home.html',
           './register.html'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  