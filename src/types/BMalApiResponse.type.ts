import { Anime } from "./Anime.type";

export type BMalApiResponse = BMalApiSuccess | BMalApiError;

export type BMalApiError = {
    status: 400 | 404 | 500;
    message: string;
};

export type BMalApiSuccess = {
    status: 200 | 201;
    message: string;
    data: Anime;
};
