import { withClerkMiddleware } from "@clerk/nextjs";
import { WithClerkMiddleware } from "@clerk/nextjs/server";

export default withClerkMiddleware();

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
  runtime: "nodejs",  // ✅ Fix Edge runtime issues

};

