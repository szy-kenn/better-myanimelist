import React from "react";
import Card from "../Card";
import "@/sass/components/category-container.scss";

const CategoryContainer = ({ heading }: { heading: string }) => {
    return (
        <div className="container">
            <h1>{heading}</h1>
            <div className="cards">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default CategoryContainer;
