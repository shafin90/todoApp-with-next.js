import connectToMongoDb from "@/debconfig/mongodb";
import item from "@/model/task";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req = NextRequest) {
  await connectToMongoDb();
  const tag = req.nextUrl.searchParams.get("list")
  revalidateTag(tag)
  const items = await item.find();
  return NextResponse.json(items);
}