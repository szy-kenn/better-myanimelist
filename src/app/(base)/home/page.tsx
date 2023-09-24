import MainPage from "@/components/MainPage";
import dbConnect from "@/lib/dbConnect";
import AnimeSchema from "@/models/Anime";
import { HydratedDocument } from "mongoose";
import React from "react";

const Page = async () => {
    await dbConnect();

    const res = await AnimeSchema.find();

    return <MainPage />;
};

export default Page;
