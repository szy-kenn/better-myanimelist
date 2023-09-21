import { Document } from "mongoose";

interface IAnime extends Document {
    title: string;
    episodes: number;
    order?: number;
}

export default IAnime;
