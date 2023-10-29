import { NextRequest, NextResponse } from "next/server";
import withAuth from "./middlewares/withAuth";

export function MainMiddleware(req:NextRequest) {
    const res = NextResponse.next()
    return res
}

export default withAuth(MainMiddleware,['/projects','/','/about','/contact'])
