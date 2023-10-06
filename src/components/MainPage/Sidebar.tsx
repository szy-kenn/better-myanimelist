import React from "react";
import "@/sass/components/sidebar.scss";

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="statistics-section">
                <h1>My Statistics</h1>
                <hr />
            </div>
            <div className="top-anime-section">
                <h1>Top Anime</h1>
                <hr />
            </div>
        </div>
    );
};

export default Sidebar;
