import mongoose, { Schema } from "mongoose";
import { Anime } from "@/types/Anime.type";

const AnimeSchema = new Schema<Anime>({
    title: {
        type: String,
        required: true,
        minLength: 1,
    },
    episodes: {
        type: Number,
        default: 0,
    },
    type: {
        type: String,
        default: null,
    },
    synopsis: {
        type: String,
        default: null,
    },
    studio: {
        type: String,
        default: null,
    },
    image: {
        type: String,
        default: null,
    },
    airingDate: {
        startDate: Date,
        endDate: Date,
    },
    seasonPremiered: {
        season: {
            type: String,
            default: null,
        },
        year: {
            type: Number,
            default: null,
        },
    },
    status: {
        type: String,
        default: null,
    },
    source: {
        type: String,
        default: null,
    },
    genres: {
        type: [String],
        default: [],
    },
});

export default mongoose.models.AnimeSchema ||
    mongoose.model<Anime>("AnimeSchema", AnimeSchema);
