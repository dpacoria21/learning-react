export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=iHYS7dJMt5Sm0ioCqR4Svr54ISguibCF&q=${category}&limit=20`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
    }));
    console.log(gifs);
    return gifs;
}
