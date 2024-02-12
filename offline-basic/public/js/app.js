if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
}



if(window.caches){

    //verificar si existe un cache
    //caches.has('test-1').then(console.log)

    //abrir cache
    caches.open('test-1')
    caches.open('caches-2')



    //eliminar cache
    caches.delete('test-1').then(console.log)

    caches.open('cache-v1'.then(cache =>{
        //agregar archivos
        cache.add('/index.html')
        //agregar varios archivos

        cache.addAll([
            'logo192.png',
            'logo512.png',
            '/pages/offline.html'
            
        ])
        .then(()=>{
            cache.put('/index.html', new Response('Interceptando el archivo index'))
            
        })

        caches.Keys().then(keys =>{
            console.log(keys)
        })

       
       
    })
    
}



