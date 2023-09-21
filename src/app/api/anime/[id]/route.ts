import dbConnect from "@/lib/dbConnect";
import Anime from "@/models/Anime";
import {IAnime} from "@/types/Anime.types";
import { HydratedDocument } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    const id = params.id;
    return NextResponse.json({ response: id });
}

export async function PATCH(req: NextRequest) {
    await dbConnect();

    try {
        const data = await req.json();
        const keys = Object.keys(data);
        const anime: IAnime | null = await Anime.findById(data._id);

        if (anime === null) {
            return NextResponse.json({ success: false });
        } else {
            for (const key of keys) {
                anime.set(key, data[key]);
            }
        }

        await anime.save();
        return NextResponse.json({ success: true, data: anime });
    } catch (error) {
        return NextResponse.json({ success: false });
    }
}

export async function DELETE(req: NextRequest) {
    await dbConnect();

    const data = await req.json();

    try {
        await Anime.deleteOne({ _id: data.id });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ success: false });
    }
}
