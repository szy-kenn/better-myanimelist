import React from "react";
import TopAnimeCard from "./TopAnimeCard";
import "@/sass/components/top-anime-container.scss";

const TopAnimeContainer = () => {
    const showTopAnimeCards = () => {
        const container = [];

        for (let i = 1; i <= 10; i++) {
            container.push(<TopAnimeCard rank={i} animeId={`${i}`} />);
        }

        return container;
    };

    return <div className="top-anime-container">{showTopAnimeCards()}</div>;
};

export default TopAnimeContainer;
