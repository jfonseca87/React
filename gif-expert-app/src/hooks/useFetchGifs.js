import { useEffect, useState } from "react";
import { getGifsFromAPI } from "../services/GifService";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const images = await getGifsFromAPI(category);
        setImages(images);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        isLoading: isLoading,
        images: images,
    }
}