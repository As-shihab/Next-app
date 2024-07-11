import { NextResponse } from "next/server";
import Connection from "../../database/dbconfig";

export async function GET(){
return NextResponse.json({CODE:'HELLO'})
}


export async function POST(req:Request , res: Response){
     const data = await req.json()
      
     const insertdata = {
          nickname: data.nickname,
          emailphone : data.emailphone,
          password: data.password

     }
       const SQL = "INSERT INTO `user`(`nickname`, `emailphone`, `password`) VALUES(?, ? ,?)"

       try{
        const inserttodo = await Connection.query(SQL , [insertdata])
        if(inserttodo){
            return NextResponse.json({code: 200 , massege: "User Created succesfully"})
        }

       }
       catch (err){ NextResponse.json({code: 405 , massege:'somthing went error'})}
         
            


    return NextResponse.json(insertdata)
     
}