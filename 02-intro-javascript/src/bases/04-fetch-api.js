const apiKey = `CedtHNkBECmbwthz4JFGsBRLEOHaJT5X`;


const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
peticion
    .then((resp) => {
        return resp.json();
    })
    .then(( {data} ) => {
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        
    })
    .catch((err) => {
        console.log(err, 'Here');
    })