import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const session = await getCurrentUser();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ status: "Fail", message: "You are not logged in" }),
      { status: 401 }
    );
  }

  return NextResponse.json({
    authenticated: !!session,
    session,
  });
}
