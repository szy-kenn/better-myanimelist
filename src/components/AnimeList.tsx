"use client";
import IAnime from "@/types/Anime.types";
import { useRouter } from "next/navigation";
import React from "react";
import { deleteAnime } from "@/utils";

const AnimeList = ({ data }: { data: IAnime[] }) => {
    const router = useRouter();

    const handleClick = (id: string) => {
        deleteAnime(id)
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
