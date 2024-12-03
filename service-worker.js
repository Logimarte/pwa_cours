const version = 1.01

self.addEventListener('install', event => {
    event.waitUntil(
        console.log('SW installé' + version)
    )
    return self.skipWaiting()
})

self.addEventListener('activate',() => {
    console.log('Activation sw'+ version)
    return self.clients.claim()
})

