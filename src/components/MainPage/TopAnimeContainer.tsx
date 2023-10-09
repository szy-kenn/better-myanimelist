import React from "react";
import TopAnimeCard from "./TopAnimeCard";
import "@/sass/components/top-anime-container.scss";

const TopAnimeContainer = () => {
    return (
        <div className="top-anime-container">
            <TopAnimeCard rank={1} animeId="1" />
            <TopAnimeCard rank={2} animeId="1" />
            <TopAnimeCard rank={3} animeId="1" />
            <TopAnimeCard rank={4} animeId="1" />
            <TopAnimeCard rank={5} animeId="1" />
        </div>
    );
};

export default TopAnimeContainer;
