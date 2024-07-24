import {NextResponse} from "next/server"
import {PrismaClient} from "@repo/db/client"

const client=new PrismaClient();

export const GET=async()=>{
    await client.user.create({
        data: {
            email:"paytmtest@mail.com",
            name:"Kiran Kumar",
            number:"9361135130",
            password:"asdfasdf"
        }
    })
    return NextResponse.json({
        message:"hi there"
    })
}