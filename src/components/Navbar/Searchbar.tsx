"use client";
import React, { useRef, useState } from "react";
import "@/sass/searchbar.scss";
import { BiSearch } from "react-icons/bi";
const Searchbar = () => {
    const [searchText, setSearchText] = useState("");
    const searchRef = useRef<HTMLDivElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const handleFocus = () => {
        searchRef.current?.classList.remove("blurred");
        searchRef.current?.classList.add("focused");
    };

    const handleBlur = () => {
        searchRef.current?.classList.remove("focused");
        searchRef.current?.classList.add("blurred");
    };

    return (
        <div className="searchbar">
            <div ref={searchRef} className="blurred">
                <input
                    type="text"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={searchText}
                />
                <BiSearch />
            </div>
        </div>
    );
};

export default Searchbar;
