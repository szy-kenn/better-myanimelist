"use client";
import animeListStyle from "@/sass/anime-list.module.scss";
import btnStyle from "@/sass/btn.module.scss";
import { IAnime, Season } from "@/types/Anime.types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { deleteAnime, showAiringDate, showSeasonPremiered } from "@/utils";
import PopupForm from "./PopupForm";

const AnimeList = ({ data }: { data: IAnime[] }) => {
    const router = useRouter();
    const [popupDisplayed, setPopupDisplayed] = useState(false);

    const handleAddClick = () => {
        setPopupDisplayed(true);
    };

    const closePopup = () => {
        setPopupDisplayed(false);
    };

    const handleDeleteClick = (id: string) => {
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
        <div className={animeListStyle.list}>
            {popupDisplayed ? (
                <PopupForm
                    className={`${animeListStyle.displayed}`}
                    closePopup={closePopup}
                    router={router}
                />
            ) : (
                <PopupForm
                    className={`${animeListStyle.hidden}`}
                    closePopup={closePopup}
                    router={router}
                />
            )}

            <h1>Anime List</h1>
            <div className={animeListStyle["btn-group"]}>
                <button
                    className={`${btnStyle.btn} ${btnStyle.success}`}
                    onClick={handleAddClick}>
                    Add Anime
                </button>
                <button className={`${btnStyle.btn} ${btnStyle.danger}`}>
                    Delete Anime
                </button>
            </div>

            <div className={animeListStyle.tableContainer}>
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
                                <p>Date Aired</p>
                            </th>
                            <th>
                                <p>Season</p>
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
                                        {showSeasonPremiered(
                                            anime.seasonPremiered
                                        )}
                                    </p>
                                </td>
                                <td>
                                    <p>{anime.status}</p>
                                </td>
                                <td>
                                    <p>{anime.genres}</p>
                                </td>
                                <td key={anime._id}>
                                    <button
                                        onClick={() =>
                                            handleDeleteClick(anime._id)
                                        }>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <div>
                                        <svg
                                            className={animeListStyle.rolling}
                                            width="24px"
                                            height="24px"
                                            viewBox="0 0 100 100"
                                            preserveAspectRatio="xMidYMid">
                                            <circle
                                                cx="50"
                                                cy="50"
                                                fill="none"
                                                stroke="#fef8f8"
                                                strokeWidth="10"
                                                r="35"
                                                strokeDasharray="164.93361431346415 56.97787143782138"
                                                transform="matrix(1,0,0,1,0,0)"></circle>
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AnimeList;
