
import { NextResponse } from "next/server"
export async function GET(request, context) {
    const userId = context.params.userId

    return NextResponse.json({
        userId
    })
}
export async function POST(request){
    const fruits = await request.json()
    return NextResponse.json(fruits)
}