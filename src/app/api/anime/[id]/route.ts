import dbConnect from "@/lib/dbConnect";
import AnimeSchema from "@/models/Anime";
import { Anime } from "@/types/Anime.type";
import {
    BMalApiError,
    BMalApiResponse,
    BMalApiSuccess,
} from "@/types/BMalApiResponse.type";
import { Error, HydratedDocument, isValidObjectId } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
): Promise<NextResponse<BMalApiResponse>> {
    await dbConnect();
    const id = params.id;

    try {
        const anime: Anime | null = await AnimeSchema.findById(id);

        if (anime) {
            return NextResponse.json<BMalApiSuccess>({
                data: anime,
                status: 200,
                message: "Anime successfully found",
            });
        }

        return NextResponse.json<BMalApiError>({
            status: 404,
            message: "Anime not found",
        });
    } catch (error) {
        if (isValidObjectId(id) && error instanceof Error) {
            return NextResponse.json<BMalApiError>({
                status: 500,
                message: error.message,
            });
        } else {
            return NextResponse.json<BMalApiError>({
                status: 404,
                message: "This page doesn't exist",
            });
        }
    }
}

export async function PATCH(req: NextRequest) {
    await dbConnect();

    try {
        const data = await req.json();
        const keys = Object.keys(data);
        const anime: Anime | null = await AnimeSchema.findById(data._id);

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
        await AnimeSchema.deleteOne({ _id: data.id });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ success: false });
    }
}
