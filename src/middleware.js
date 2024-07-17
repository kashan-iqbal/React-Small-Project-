import { NextResponse } from "next/server";

export default function middlewar(request) {
  return NextResponse.redirect(new URL("/contact", request.url));
}

export const config = {
  matcher: ["/blog/:path*", "/About/:path*"],
};
