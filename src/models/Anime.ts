import mongoose, { Schema } from "mongoose";
import IAnime from "@/types/Anime.types";

const AnimeSchema = new Schema<IAnime>({
    title: {
        type: String,
        required: true,
        minLength: 1,
    },
    episodes: {
        type: Number,
        required: true,
    },
});

export default mongoose.models.Anime ||
    mongoose.model<IAnime>("Anime", AnimeSchema);
