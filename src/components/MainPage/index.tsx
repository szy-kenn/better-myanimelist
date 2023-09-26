import React from "react";
import Alert from "../Navbar/Alert";
import "@/sass/main-page.scss";

const MainPage = () => {
    return (
        <>
            <Alert
                message="BetterMyAnimeList is under construction"
                type="info"
                heading="Update"
            />
            <div className="main">
                <div className="content-container">Contents</div>
                <div className="sidebar-container">Sidebar</div>
            </div>
        </>
    );
};

export default MainPage;
