import React from "react";
import "@/sass/components/sidebar.scss";
import TopAnimeCard from "./TopAnimeCard";
import TopAnimeContainer from "./TopAnimeContainer";

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="statistics-section">
                <h1>My Statistics</h1>
                <hr />
                <div className="statistics-container">
                    <div>
                        <h1>{1984}</h1>
                        <h3>Anime Entries</h3>
                    </div>
                    <div>
                        <h1>{1984}</h1>
                        <h3>Anime Entries</h3>
                    </div>
                    <div>
                        <h1>{1984}</h1>
                        <h3>Anime Entries</h3>
                    </div>
                    <div>
                        <h1>{1984}</h1>
                        <h3>Anime Entries</h3>
                    </div>
                </div>
            </div>
            <div className="top-anime-section">
                <h1>Top Anime</h1>
                <hr />
                <TopAnimeContainer />
            </div>
        </div>
    );
};

export default Sidebar;
