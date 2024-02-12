self.addEventListener('fetch', event => {
    

    const offlineResponse = fetch('pages/offline.html', event=>{

        const resp = fetch(event.request)
            .catch(()=>offlineResponse)

            event.respondWith(resp)

    })
    

    
})