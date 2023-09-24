import dbConnect from "@/lib/dbConnect";
import Anime from "@/models/Anime";
import { IAnime } from "@/types/Anime.type";
import { HydratedDocument } from "mongoose";
import React from "react";

const Page = async () => {
    await dbConnect();

    const res = await Anime.find();

    return <div>This is a home page. ({res.length})</div>;
};

export default Page;
