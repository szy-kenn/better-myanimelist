"use client";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import Card from "../Card";
import "@/sass/components/category-container.scss";

const CategoryContainer = ({ heading }: { heading: string }) => {
    const cardsContainerRef = useRef<HTMLDivElement>(null);

    const [cardWidth, setCardWidth] = useState("");
    const [gridColumnCount, setGridColumnCount] = useState(0);

    const generateCards = (numberOfCards: number) => {
        const cards: JSX.Element[] = [];

        for (let i = 0; i < numberOfCards; i++) {
            cards.push(<Card key={i} />);
        }

        return cards;
    };

    const handleResize = () => {
        if (window.innerWidth >= 1440) {
            setCardWidth("15%");
        } else if (window.innerWidth >= 769 && window.innerWidth < 1439) {
            setCardWidth("18.5%");
        } else if (window.innerWidth > 641) {
            setCardWidth("23%");
        } else if (window.innerWidth > 399) {
            setCardWidth("30%");
        } else if (window.innerWidth > 249) {
            setCardWidth("45%");
        } else {
            setCardWidth("100%");
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", () => handleResize());
    }, []);

    useEffect(() => {
        if (cardsContainerRef.current) {
            const columnCount = getComputedStyle(cardsContainerRef.current)
                .getPropertyValue("grid-template-columns")
                .split(" ").length;

            setGridColumnCount(columnCount);
        }
    }, [cardWidth]);

    return (
        <div className="container">
            <h1>{heading}</h1>
            <div
                className="cards"
                ref={cardsContainerRef}
                style={{ "--card-width": cardWidth } as CSSProperties}>
                {generateCards(gridColumnCount)}
            </div>
        </div>
    );
};

export default CategoryContainer;
