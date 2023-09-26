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
                    <CategoryContainer heading="Popular This Season" />
                    <CategoryContainer heading="Popular This Season" />
                    <CategoryContainer heading="Popular This Season" />
                    <CategoryContainer heading="Popular This Season" />
                </div>
                <div className="sidebar-container">Sidebar</div>
            </div>
        </>
    );
};

export default MainPage;
