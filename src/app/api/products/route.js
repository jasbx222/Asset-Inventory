import { connectToDatabase } from "@/app/lib/db";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const db = await connectToDatabase();
    const result = await db.request().query('SELECT  * FROM  dbo.Products');

    return new NextResponse(JSON.stringify(result),{status:200})
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'خطأ في جلب البيانات' }, { status: 500 });
  }
}
