import { Document } from "mongoose";

type AnimeType = "TV" | "Movie" | "Special" | "OVA" | "ONA";
type AnimeStatus = "Not Aired Yet" | "Airing" | "Completed";
type Season = "Winter" | "Spring" | "Summer" | "Fall";

interface IAnime extends Document {
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

export default IAnime;
