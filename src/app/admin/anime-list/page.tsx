import AnimeList from "@/components/AnimeList";
import InputAnime from "@/components/InputAnime";
import { getAllAnime } from "@/utils";
import React from "react";

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
