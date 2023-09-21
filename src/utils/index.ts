import Anime from "@/models/Anime";
import IAnime from "@/types/Anime.types";
import { HydratedDocument } from "mongoose";

export const getAllAnime = async () => {
    const apiUrl = "http://127.0.0.1:3000/api/anime";
    const response = await fetch(apiUrl, {
        cache: "no-store",
    });
    const data = await response.json();
    return data;
};

export const getAnime = async (id: string) => {
    const apiUrl = `http://127.0.0.1:3000/api/anime/${id}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
};

export const postAnime = async (title: string, ep: number) => {
    const anime: HydratedDocument<IAnime> = new Anime({
        title: title,
        episodes: ep,
    });
};
