import dbConnect from "@/lib/dbConnect";
import Anime from "@/models/Anime";
import IAnime from "@/types/Anime.types";
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

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect();

    if (req.body) {
        try {
            const newAnime: HydratedDocument<IAnime> = await new Anime(
                req.body
            );
            res.status(201).json({ "success": true, "data": newAnime });
        } catch (error) {
            res.status(400).json({ "success": false });
        }
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
