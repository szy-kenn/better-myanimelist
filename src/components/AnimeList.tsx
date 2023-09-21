"use client";
import IAnime from "@/types/Anime.types";
import { useRouter } from "next/navigation";
import React from "react";

const AnimeList = ({ data }: { data: IAnime[] }) => {
    const router = useRouter();

    const handleClick = (id: string) => {
        fetch(`/api/anime/${id}`, {
            method: "DELETE",
            body: JSON.stringify({ id: id }),
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
        <ul>
            {data.map((anime: IAnime) => (
                <li key={anime._id}>
                    <div>
                        <p>ID: {anime._id}</p>
                        <p>Title: {anime.title}</p>
                        <p>Episodes: {anime.episodes}</p>
                        <button
                            style={{ color: "black" }}
                            onClick={() => handleClick(anime._id)}
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default AnimeList;
