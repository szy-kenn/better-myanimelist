import { Document } from "mongoose";

export type AnimeType = "TV" | "Movie" | "Special" | "OVA" | "ONA";
export type Season = "Winter" | "Spring" | "Summer" | "Fall";
export type AnimeStatus = "Not Aired Yet" | "Airing" | "Completed";

export type Anime = Document & {
    title?: string;
    episodes?: number;
    type?: AnimeType;
    synopsis?: string;
    studio?: string;
    image?: string;
    airingDate?: {
        startDate?: Date;
        endDate?: Date;
    };
    seasonPremiered?: {
        season?: Season;
        year?: number;
    };
    status?: AnimeStatus;
    source?: string;
    genres?: string[];
};

export type AiringDate = Anime["airingDate"];
export type SeasonPremiered = Anime["seasonPremiered"];
