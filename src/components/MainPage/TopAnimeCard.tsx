import React from "react";
import "@/sass/components/top-anime-card.scss";

const TopAnimeCard = ({ rank, animeId }: { rank: number; animeId: string }) => {
    return (
        <div className="top-anime-card">
            <h1>{rank}</h1>
            <div className="top-anime-content">
                <img src="./img/steins-gate.jpg" alt={`Top ${rank} Anime`} />
                <div className="top-anime-info">
                    <h3 className="top-anime-title">Steins;Gate</h3>
                    <div className="top-anime-info-subsection">
                        <div className="top-anime-type">
                            <p>TV</p>
                            <span>24 eps</span>
                        </div>
                        <div className="top-anime-status">
                            <p>Spring 2011</p>
                            <span>Finished</span>
                        </div>
                    </div>
                </div>
                <p className="score">9.10</p>
            </div>
        </div>
    );
};

export default TopAnimeCard;
