"use client";
import { IAnime, Season } from "@/types/Anime.types";
import { useRouter } from "next/navigation";
import React from "react";
import { deleteAnime, showAiringDate, showSeasonPremiered } from "@/utils";
import animeListStyle from "@/sass/anime-list.module.scss";
import btnStyle from "@/sass/btn.module.scss";

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

    /**
     * Generate the function comment for the given function body.
     *
     * @param {object} airingDate - An object containing the start and end dates of airing.
     * @param {Date} airingDate.startDate - The start date of airing.
     * @param {Date} airingDate.endDate - The end date of airing.
     * @returns {string | null} The formatted string representing the airing dates.
     */

    return (
        <div className={animeListStyle.list}>
            <h1>Anime List</h1>
            <div className={animeListStyle["btn-group"]}>
                <button className={`${btnStyle.btn} ${btnStyle.success}`}>
                    Add Anime
                </button>
                <button className={`${btnStyle.btn} ${btnStyle.danger}`}>
                    Delete Anime
                </button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>
                            <p>ID</p>
                        </th>
                        <th>
                            <p>Title</p>
                        </th>
                        <th>
                            <p>Episodes</p>
                        </th>
                        <th>
                            <p>Type</p>
                        </th>
                        <th>
                            <p>Airing Date</p>
                        </th>
                        <th>
                            <p>Season Premiered</p>
                        </th>
                        <th>
                            <p>Status</p>
                        </th>
                        <th>
                            <p>Genres</p>
                        </th>
                        <th>
                            <p>Action</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((anime: IAnime) => (
                        <tr key={anime._id}>
                            <td>
                                <p>{anime._id}</p>
                            </td>
                            <td>
                                <p>{anime.title}</p>
                            </td>
                            <td>
                                <p>{anime.episodes}</p>
                            </td>
                            <td>
                                <p>{anime.type}</p>
                            </td>
                            <td>
                                <p>{showAiringDate(anime.airingDate)}</p>
                            </td>
                            <td>
                                <p>
                                    {showSeasonPremiered(anime.seasonPremiered)}
                                </p>
                            </td>
                            <td>
                                <p>{anime.status}</p>
                            </td>
                            <td>
                                <p>{anime.genres}</p>
                            </td>
                            <td key={anime._id}>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AnimeList;
