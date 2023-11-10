const studentProfileModel = require("../models/studentProfileModel");
const teacherProfileModel = require("../models/teacherProfileModel");

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({path: "../../config.env"});

exports.studentLogin=(req,res)=>{
    let userName=req.headers["userName"];
    studentProfileModel.findOne({userName:userName},{password: false}).then((data)=>{
    
            // Create Auth Token
            let Payload={exp: Math.floor(Date.now() / 1000) + (720*60*60), data:data}
            let token = jwt.sign( Payload,process.env.SECRETKEY_JWT_WEBTOKEN);
            res.cookie("access_token",token,{
                httpOnly: true,
                maxAge: 30*24*60*60*1000
            }).status(200).json({
                status: "Alhamdulillah",
                token: token,
                data: data
            })

       }
    ).catch((err)=>{
        res.status(400).json({
            status:"Innalillah",
            data: err
        });
    })

}

exports.teacherLogin=(req,res)=>{
    let userName=req.headers["userName"];
    teacherProfileModel.findOne({userName:userName},{password: false}).then((data)=>{
    
            // Create Auth Token
            let Payload={exp: Math.floor(Date.now() / 1000) + (24*60*60), data:data}
            let token = jwt.sign( Payload,process.env.SECRETKEY_JWT_WEBTOKEN);
            res.cookie("access_token",token,{
                httpOnly: true,
                maxAge: 30*24*60*60*1000
            }).status(200).json({
                status: "Alhamdulillah",
                token: token,
                data: data
            })

       }
    ).catch((err)=>{
        res.status(400).json({
            status:"Innalillah",
            data: err
        });
    })

}