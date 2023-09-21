import { Document } from "mongoose";

export type AnimeType = "TV" | "Movie" | "Special" | "OVA" | "ONA";
export type AnimeStatus = "Not Aired Yet" | "Airing" | "Completed";
export type Season = "Winter" | "Spring" | "Summer" | "Fall";

export interface IAnime extends Document {
    _id: string;
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
}
