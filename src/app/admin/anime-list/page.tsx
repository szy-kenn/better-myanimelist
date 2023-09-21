import AnimeList from "@/components/AnimeList";
import InputAnime from "@/components/InputAnime";
import { getAllAnime } from "@/utils";
import React from "react";

const page = async () => {
    const data = await getAllAnime();

    return <AnimeList data={data.response} />;
};

export default page;
