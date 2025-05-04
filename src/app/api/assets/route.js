import connectToDatabase from "@/app/lib/db";
import Asset from "@/app/lib/models/Items";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const result = body;

    await connectToDatabase();

    // ✅ إنشاء وحفظ الأصل
    const newAsset = new Asset({
      assetId: result.assetId,
      assetName: result.assetName,
      quantity: result.quantity,
      location: result.location,
      status: result.status,
      notes: result.notes,
      authority: result.authority,
    });

 const newAssets = await newAsset.save();

    return new NextResponse(JSON.stringify({ data:  newAssets }), {
      status: 201,
    });
  } catch (error) {
    console.error("API Error:", error);
  }
}
