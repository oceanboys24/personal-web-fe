import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export { auth } from "@/auth";

export async function middleware(req: NextRequest) {
  const session = await auth();

  if (session && req.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  
  if (!session && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/dashboard/:path*"],
};
