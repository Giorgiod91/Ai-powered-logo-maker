import { NextResponse } from "next/server";
import fetch from "node-fetch";

interface ApiResponse {
  success: boolean;
  data?: {
    image_url?: string;
  };
  message?: string;
}

export async function POST(request: Request) {
  const API_URL = process.env.API_URL;

  try {
    const body = await request.json();

    const response = await fetch(API_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      // Handle HTTP errors
      return NextResponse.json(
        { error: `API request failed with status ${response.status}` },
        { status: response.status },
      );
    }

    const responseBody = await response.json();
    const data = validateApiResponse(responseBody);

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch data from API" },
      { status: 500 },
    );
  }
}

function validateApiResponse(response: any): ApiResponse {
  if (typeof response === "object" && response !== null) {
    return {
      success: typeof response.success === "boolean" ? response.success : false,
      data:
        response.data && typeof response.data === "object" ? response.data : {},
      message:
        typeof response.message === "string" ? response.message : undefined,
    };
  }

  return { success: false };
}
