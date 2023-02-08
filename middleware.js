import { NextResponse } from 'next/server'
import protectedPages from "./protectedPages";

export function middleware(req) {
  let token = req.cookies.get("user-token")?.value;
  
  const url = req.url;
  let isProtectedPage = false;

  protectedPages.forEach((pageTitle) => {
    if (url.includes(pageTitle)) {
      isProtectedPage = true;
      return;
    }
  });

  if (isProtectedPage) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }      
  }

  return NextResponse.next();
}
