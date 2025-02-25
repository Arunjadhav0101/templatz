import { generateContent, getPrompt } from "@/lib/gen-ai/genai";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello From Server" });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  const prompt = getPrompt(body);
  try {
    const result = await generateContent(prompt);
    return result;
  } catch (error) {
    return NextResponse.json({ error: "Internal server error", details: error },{ status: 500})
  }
}
