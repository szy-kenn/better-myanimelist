import { NextRequest, NextResponse } from "next/server";

interface Params {
    params: {
        id: string;
    };
}

export async function GET(req: NextRequest, { params }: Params) {
    const id = params.id;
    return NextResponse.json({ mangaId: id });
}
