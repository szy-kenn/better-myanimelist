import React from "react";
import Alert from "../Navbar/Alert";
import Card from "../Card";
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
                <h1>Popular This Season</h1>
                <div className="cards">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    );
};

export default MainPage;
