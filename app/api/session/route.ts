import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/session";

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
