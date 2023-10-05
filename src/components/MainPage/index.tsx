import React from "react";
import Alert from "../Navbar/Alert";
import "@/sass/pages/main.scss";
import CategoryContainer from "./CategoryContainer";

const MainPage = () => {
    return (
        <>
            <Alert
                message="BetterMyAnimeList is under construction"
                type="info"
                heading="Update"
            />
            <div className="main">
                <div className="content-container">
                    <CategoryContainer heading="Trending This Week" />
                    <CategoryContainer heading="Top Anime This Season" />
                    <CategoryContainer heading="Top Anime of All Time" />
                    <CategoryContainer heading="Top Upcoming Anime" />
                </div>
                <div className="sidebar-container">Sidebar</div>
            </div>
        </>
    );
};

export default MainPage;
