import InputBox from "./InputBox";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { postAnime } from "@/utils";
import { useState } from "react";
import animeListStyle from "@/sass/anime-list.module.scss";

const PopupForm = ({
    className,
    closePopup,
    router,
}: {
    className: string;
    closePopup: () => void;
    router: AppRouterInstance;
}) => {
    const [formData, setFormData] = useState({
        title: "",
        episodes: 0,
        type: undefined,
        synopsis: "",
        studio: "",
        image: "",
        airingDate: {
            startDate: undefined,
            endDate: undefined,
        },
        seasonPremiered: {
            season: undefined,
            year: undefined,
        },
        status: undefined,
        source: "",
        genres: [],
    });

    const handleChange = (key: string, value: any) => {
        if (key === "startDate" || key == "endDate") {
            setFormData({
                ...formData,
                airingDate: {
                    ...formData["airingDate"],
                    [key]: value,
                },
            });
        } else {
            setFormData({
                ...formData,
                [key]: value,
            });
        }
    };

    const handleSubmit = () => {
        postAnime(formData)
            .then((response) => response.json())
            .then((_data) => {
                router.refresh();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className={`${animeListStyle.popup} ${className}`}>
            <div className={`${animeListStyle.topbar}`}>
                <h1>Add Anime</h1>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    onClick={closePopup}>
                    {/* <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
            </div>
            <hr />
            <InputBox
                type="text"
                text="title"
                valueKey="title"
                placeholder="Test"
                onChange={handleChange}
            />
            <InputBox
                type="text"
                text="eps."
                valueKey="episodes"
                placeholder="15"
                onChange={handleChange}
            />
            <InputBox
                type="date"
                text="start"
                valueKey="startDate"
                onChange={handleChange}
            />
            <InputBox
                type="date"
                text="end"
                valueKey="endDate"
                onChange={handleChange}
            />
            <button className="success" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
};

export default PopupForm;
