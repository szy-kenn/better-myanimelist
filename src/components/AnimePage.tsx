"use client";
import { BMalApiResponse, BMalApiSuccess } from "@/types/BMalApiResponse.type";
import { notFound } from "next/navigation";
import React from "react";

const AnimePage = ({ data }: { data: BMalApiResponse }) => {
    if (data.status === 200) {
        return <div>Anime Page: {data.data.title}</div>;
    } else if (data.status === 404) {
        return notFound();
    } else if (data.status === 500) {
        return <div>{data.message}</div>;
    }
};

export default AnimePage;
