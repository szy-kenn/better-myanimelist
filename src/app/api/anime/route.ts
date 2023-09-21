import dbConnect from "@/lib/dbConnect";
import Anime from "@/models/Anime";
import { IAnime } from "@/types/Anime.types";
import { HydratedDocument } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    await dbConnect();

    try {
        const data: IAnime[] = await Anime.find<IAnime>();
        return NextResponse.json({ response: data });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ message: error.message });
        } else {
            return NextResponse.json({ message: "Something went wrong" });
        }
    }
}

export async function POST(req: NextRequest) {
    await dbConnect();

    const data = await req.json();

    try {
        const anime = await new Anime(data);
        await anime.save();
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false });
    }
}
