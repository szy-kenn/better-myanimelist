import AnimeSchema from "@/models/Anime";
import { Anime, Season } from "@/types/Anime.type";
import { BMalApiResponse } from "@/types/BMalApiResponse.type";
import { NextResponse } from "next/server";

const ANIME_API_URL = "http://127.0.0.1:3000/api/anime";
const MANGA_API_URL = "http://127.0.0.1:3000/api/manga";

/**
 * Retrieves all anime data from the API.
 *
 * @return {Promise<any>} The JSON data containing all anime.
 */
export const getAllAnime = async () => {
    const response = await fetch(ANIME_API_URL, {
        cache: "no-store",
    });
    const data = await response.json();
    return data;
};

/**
 * Retrieves an anime by its ID from the anime API.
 *
 * @param {string} id - The ID of the anime.
 * @return {Promise<object>} The anime data.
 */
export const getAnime = async (id: string): Promise<Response> => {
    return fetch(`${ANIME_API_URL}/${id}`, {
        cache: "no-store",
    });
};

export const postAnime = async (data: object): Promise<Response> => {
    return fetch(ANIME_API_URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
};

// create a function for patch method
export const patchAnime = async (
    id: string,
    data: Anime
): Promise<Response> => {
    return fetch(`${ANIME_API_URL}/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
};

/**
 * Deletes an anime by its ID.
 *
 * @param {string} id - The ID of the anime to delete.
 * @return {Promise<Response>} A Promise that resolves to the response from the delete request.
 */
export const deleteAnime = async (id: string): Promise<Response> => {
    return fetch(`${ANIME_API_URL}/${id}`, {
        method: "DELETE",
        body: JSON.stringify({ id: id }),
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const showAiringDate = (airingDate?: {
    startDate?: Date;
    endDate?: Date;
}) => {
    if (!airingDate || (!airingDate.startDate && !airingDate.endDate)) {
        return null;
    }

    if (airingDate.startDate != null) {
        if (!airingDate.endDate) {
            return `${new Date(airingDate.startDate).toLocaleDateString(
                "en-us",
                { year: "2-digit", month: "numeric", day: "numeric" }
            )} - ??`;
        }

        return `${new Date(airingDate.startDate).toLocaleDateString("en-us", {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
        })} 
        - ${new Date(airingDate.endDate).toLocaleDateString("en-us", {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
        })}`;
    }
};

export const showSeasonPremiered = (seasonPremiered?: {
    season?: Season;
    year?: number;
}) => {
    if (
        !seasonPremiered ||
        (!seasonPremiered.season && !seasonPremiered.year)
    ) {
        return null;
    }

    if (!seasonPremiered.year) {
        return seasonPremiered.season;
    }

    if (!seasonPremiered.season) {
        return seasonPremiered.year;
    }

    return `${seasonPremiered.season} ${seasonPremiered.year}`;
};
