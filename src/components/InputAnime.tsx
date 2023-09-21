"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const InputAnime = () => {
    const [title, setTitle] = useState("");
    const [episodes, setEpisodes] = useState(0);
    const router = useRouter();

    const handleClick = () => {
        fetch("/api/anime", {
            method: "POST",
            body: JSON.stringify({ title: title, episodes: episodes }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                console.log(response);
                router.refresh();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "15%",
                gap: "0.25rem",
            }}
        >
            <input
                type="text"
                value={title}
                name="title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="number"
                name="episodes"
                value={episodes}
                onChange={(e) => setEpisodes(Number(e.target.value))}
            />
            <button
                type="button"
                style={{ color: "black" }}
                onClick={handleClick}
            >
                Submit
            </button>
        </div>
    );
};

export default InputAnime;
