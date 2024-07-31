import { NextResponse } from "next/server"
async function GET(){
    return NextResponse.json({
        fruits: ["apples" , "grapes", "oranges"]
    })
}