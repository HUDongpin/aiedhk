import { NextRequest, NextResponse } from "next/server";

function parseBasicAuth(header: string | null) {
  if (!header?.startsWith("Basic ")) return null;
  try {
    const decoded = atob(header.slice("Basic ".length));
    const separator = decoded.indexOf(":");
    if (separator === -1) return null;
    return {
      username: decoded.slice(0, separator),
      password: decoded.slice(separator + 1),
    };
  } catch {
    return null;
  }
}

function unauthorized(message = "Authentication required.") {
  return new NextResponse(message, {
    status: 401,
    headers: {
      "www-authenticate": 'Basic realm="AIEDHK Research Admin"',
    },
  });
}

export function proxy(request: NextRequest) {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;

  if (!username || !password) {
    return new NextResponse("Research admin is not configured. Set ADMIN_USERNAME and ADMIN_PASSWORD.", { status: 503 });
  }

  const credentials = parseBasicAuth(request.headers.get("authorization"));
  if (!credentials || credentials.username !== username || credentials.password !== password) {
    return unauthorized();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
