import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([""]);
const isPublicRoute = createRouteMatcher(["/sign-in", "/sign-up"]);
export default clerkMiddleware((auth, req) => {
  // if (
  //   url.pathname === "/" ||
  //   (url.pathname === "/site" && url.host === process.env.NEXT_PUBLIC_DOMAIN)
  // ) {
  //   return NextResponse.rewrite(new URL("/site", req.url));
  // }
  if (!isPublicRoute(req) && isProtectedRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
