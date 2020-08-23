// Guardar en el cache dinamico
function actualizarCacheDinamico(dinamicoCache, req, res) {

    // si la consulta a la web tiene informacion
    if (res.ok) {

        return caches.open(dinamicoCache).then(cache => {

            cache.put(req, res.clone());

            return res.clone();

        });


    } // sino quiere decir que el archivo no esta en el cache ni en la web 
    else {
        return res;
    }
}