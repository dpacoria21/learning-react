const getImagen = async () => {
    try{

        const apiKey = `CedtHNkBECmbwthz4JFGsBRLEOHaJT5X`;
        const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

        const {data} = await peticion.json();
        const {url} = data.images.original;

        const imagen = document.createElement('img');
        imagen.src = url;
        document.body.append(imagen);
 
    }catch(err) {
        console.error(err);
    }
}

getImagen();

const amigo = 'sdasf';

// const apiKey = `CedtHNkBECmbwthz4JFGsBRLEOHaJT5X`;
// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
// peticion
//     .then((resp) => {
//         return resp.json();
//     })
//     .then(( {data} ) => {
//         const {url} = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);
        
//     })
//     .catch((err) => {
//         console.log(err, 'Here');
//     })
