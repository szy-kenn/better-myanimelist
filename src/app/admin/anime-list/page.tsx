import React from "react";
import AnimeList from "@/components/AnimeList";
import InputAnime from "@/components/InputAnime";
import { getAllAnime } from "@/utils";

const page = async () => {
    const data = await getAllAnime();

    return <AnimeList data={data.response} />;
};

export default page;
