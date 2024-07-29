// import {NextResponse} from "next/server"
// import {PrismaClient} from "@repo/db/client"

// const client=new PrismaClient();

// export const GET=async()=>{
//     await client.user.create({
//         data: {
//             email:"paytmtest@mail.com",
//             name:"Kiran Kumar",
//             number:"9361135130",
//             password:"asdfasdf"
//         }
//     })
//     return NextResponse.json({
//         message:"hi there"
//     })
// }
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";
import { authOptions } from "../../../lib/auth";

export const GET = async () => {
    const session = await getServerSession(authOptions);
    if (session.user) {
        return NextResponse.json({
            user: session.user
        })
    }
    return NextResponse.json({
        message: "You are not logged in"
    }, {
        status: 403
    })
}