import connectToMongoDb from "@/debconfig/mongodb";
import item from "@/model/task";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req = NextRequest, { params }) {
    const { id } = params;
  
    await connectToMongoDb();
    await item.findByIdAndDelete(id);
    // const tag = req.nextUrl.searchParams.get("list")
    // revalidateTag(tag)
    return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}