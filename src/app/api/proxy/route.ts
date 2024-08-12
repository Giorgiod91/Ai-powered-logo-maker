import { NextResponse } from "next/server";
import fetch from "node-fetch";
interface ApiResponse {
  image_url?: string;
}

export async function POST(request: Request) {
  const API_URL = process.env.API_URL;

  try {
    const body = (await request.json()) as { prompt: string; size: string };

    const response = await fetch(API_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data: ApiResponse = (await response.json()) as ApiResponse;
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data from API" },
      { status: 500 },
    );
  }
}
