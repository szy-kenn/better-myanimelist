import AnimePage from "@/components/AnimePage";
import { getAnime } from "@/utils";
import React from "react";
import { NextResponse } from "next/server";
import { BMalApiResponse } from "@/types/BMalApiResponse.type";

const page = async ({ params: { id } }: { params: { id: string } }) => {
    const response: Response = await getAnime(id);
    const animeData: BMalApiResponse = await response.json();

    console.log(animeData);

    return <AnimePage data={animeData} />;
};

export default page;
