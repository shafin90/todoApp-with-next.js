import connectToMongoDb from "@/debconfig/mongodb";
import item from "@/model/task";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request = NextRequest) {
    const { name, description } = await request.json();
    await connectToMongoDb();
    await item.create({ name, description });
    const tag = request.nextUrl.searchParams.get("list")
    revalidateTag(tag)
    return NextResponse.json({ message: "created" }, { statud: "201" })
}

