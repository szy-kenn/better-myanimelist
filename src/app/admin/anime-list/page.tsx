import React from "react";
import AnimeList from "@/components/AnimeList";
import { getAllAnime } from "@/utils";

const page = async () => {
    const data = await getAllAnime();

    return <AnimeList data={data.response} />;
};

export default page;
