import InputAnime from "@/components/InputAnime";
import IAnime from "@/types/Anime.types";
import { getAllAnime } from "@/utils";
import { get } from "http";
import React from "react";
import AnimeList from "@/components/AnimeList";

const page = async () => {
    const data = await getAllAnime();

    return (
        <>
            <h1> Anime List</h1>
            <AnimeList data={data.response} />

            <InputAnime />
        </>
    );
};

export default page;
