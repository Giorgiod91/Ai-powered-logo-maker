import { NextResponse } from "next/server";
import fetch from "node-fetch";

interface ApiResponse {
  image_url?: string;
}

export async function POST(request: Request) {
  const API_URL = process.env.API_URL;

  if (!API_URL) {
    return NextResponse.json(
      { error: "API_URL is not defined in environment variables" },
      { status: 500 },
    );
  }

  try {
    const body = await request.json();

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data: ApiResponse = (await response.json()) as ApiResponse;
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data from API" },
      { status: 500 },
    );
  }
}
