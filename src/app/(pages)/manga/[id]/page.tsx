import { getItem } from "@/utils";
import React from "react";

const page = async ({ params: { id } }: { params: { id: string } }) => {
    const data = await getItem(id);
    return <div>Manga Page: {data.response}</div>;
};

export default page;
