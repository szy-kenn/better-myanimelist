import React from "react";

const getData = async () => {
    const res = await fetch("http://127.0.0.1:3000/api/anime");
    const data = await res.json();
    return data;
};

const page = async () => {
    const data = await getData();
    return <div>This is the Anime page ( {data.response} )</div>;
};

export default page;
