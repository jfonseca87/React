
export const getGifsFromAPI = async (category) => {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=8HGCajtpvE4JKERrCsqUzqAAm72qDSlG&q=${category}&limit=10`;

    const result = await fetch(apiUrl);
    const { data } = await result.json();
    const gifList = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifList;
}