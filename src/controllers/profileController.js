const studentProfileModel = require("../models/studentProfileModel");
const teacherProfileModel = require("../models/teacherProfileModel");
const {hashedPasswordCustom} = require("../middlewares/passwordEncryption");
// const userPermission =require("../middlewares/userPermissionCheck");


//creating student records to database
exports.createStudent = (req, res) => {
    const randomInteger = Math.floor(Math.random() * 100) + 1;
    let autoGeneratedname = `Abdullah${randomInteger}`;
    //Receive Post Request Data from req body
    let reqBody = req.body;
    let userName = autoGeneratedname;
    let details = reqBody.details;
    let firstName = reqBody.firstName;
    let lastName = reqBody.lastName;
    let nidNumber =reqBody.nidNumber;
    let birthRegNumber =reqBody.birthRegNumber;
    let fatherName = reqBody.fatherName;
    let emailAddress = reqBody.emailAddress;
    let password = req.headers["passKey"];
    let mobileNumber = reqBody.mobileNumber;
    let occupation = reqBody.occupation;
    let extracurricular = reqBody.extracurricular;
    let studentCourseCode = reqBody.studentCourseCode;
    let studentJamatCode = reqBody.studentJamatCode;
    let gender = reqBody.gender;
    let dateOfBirth = reqBody.dateOfBirth;
    let countryName = reqBody.countryName;
    let fullPresentAddress = reqBody.fullPresentAddress;
    let fullPermanentAddress = reqBody.fullPermanentAddress;
    let admissionDate = new Date(Date.now()).toISOString();
    let admissionSession = reqBody.admissionSession;
    let studentMotive = reqBody.studentMotive;
    let paymentStatus = reqBody.paymentStatus;
    let activeStatus = reqBody.activeStatus;
    let userRole = "student";


    //Make res body for posting to the Database

    let postBody={
        userName:userName,
        details:details,
        firstName:firstName,
        lastName:lastName,
        nidNumber: nidNumber,
        birthRegNumber: birthRegNumber,
        fatherName:fatherName,
        emailAddress:emailAddress,
        password:password,
        mobileNumber:mobileNumber,
        occupation:occupation,
        extracurricular:extracurricular,
        studentCourseCode:studentCourseCode,
        studentJamatCode:studentJamatCode,
        gender:gender,
        dateOfBirth:dateOfBirth,
        countryName:countryName,
        fullPresentAddress:fullPresentAddress,
        fullPermanentAddress:fullPermanentAddress,
        admissionDate:admissionDate,
        admissionSession:admissionSession,
        studentMotive:studentMotive,
        paymentStatus:paymentStatus,
        activeStatus: activeStatus,
        userRole: userRole
       
    };

    // Create Database record
    studentProfileModel.create(postBody).then((data)=>{
        res.status(200).json({
            status:"Alhamdulillah",
            data: data
        });
    }).catch((err)=>{
        res.status(400).json({
            status: "Innalillah",
            data: err
        })
    });

}

//Read or select Database Record
exports.selectStudents=(req,res)=>{
    let query=req.headers['userName'];
    let projection=req.body.projection
    studentProfileModel.find({userName: query}, projection).then((data)=>{
        res.status(200).json({
            status:"Alhamdulillah",
            data: data
        })
    }).catch((err)=>{
        res.status(400).json({
            status:"Innalillah",
            data: err 
        })
    })
}
exports.selectAllStudents=(req,res)=>{
    let query=req.body.query;
    let projection=req.body.projection
    studentProfileModel.find(query, projection).then((data)=>{
        res.status(200).json({
            status:"Alhamdulillah",
            data: data
        })
    }).catch((err)=>{
        res.status(400).json({
            status:"Innalillah",
            data: err 
        })
    })
}


//Update Database Record
exports.updateStudent= async (req,res)=>{
    
    let reqBody= req.body;
    let filter=reqBody["_id"];
    let hashedPass = await hashedPasswordCustom(reqBody.password);
    var postBody;
    if(hashedPass == null){
        postBody={
                firstName:{
                    en:reqBody.firstName.en,
                    bn:reqBody.firstName.bn,
                },
                lastName:{
                    en:reqBody.lastName.en,
                    bn:reqBody.lastName.bn,
                },
                nidNumber:reqBody.nidNumber,
                birthRegNumber:reqBody.birthRegNumber,
                fatherName:{
                    en:reqBody.fatherName.en,
                    bn:reqBody.fatherName.bn,
                },
                emailAddress:reqBody.emailAddress,
                mobileNumber:reqBody.mobileNumber,
                occupation:reqBody.occupation,
                extracurricular:reqBody.extracurricular,
                studentCourseCode:reqBody.studentCourseCode,
                studentJamatCode:reqBody.studentJamatCode,
                gender:reqBody.gender,
                dateOfBirth:reqBody.dateOfBirth,
                countryName:reqBody.countryName,
                fullPresentAddress:reqBody.fullPresentAddress,
                fullPermanentAddress:reqBody.fullPermanentAddress,
                admissionSession:reqBody.admissionSession,
                studentMotive:reqBody.studentMotive,
                paymentStatus:reqBody.paymentStatus,
                activeStatus: reqBody.activeStatus,
                userRole: reqBody.userRole,
                userName: reqBody.userName,
                details: reqBody.details,
                admissionDate: reqBody.admissionDate
        
        }
    }else{
        postBody={
            firstName:{
                en:reqBody.firstName.en,
                bn:reqBody.firstName.bn,
            },
            lastName:{
                en:reqBody.lastName.en,
                bn:reqBody.lastName.bn,
            },
            nidNumber:reqBody.nidNumber,
            birthRegNumber:reqBody.birthRegNumber,
            fatherName:{
                en:reqBody.fatherName.en,
                bn:reqBody.fatherName.bn,
            },
            emailAddress:reqBody.emailAddress,
            mobileNumber:reqBody.mobileNumber,
            occupation:reqBody.occupation,
            extracurricular:reqBody.extracurricular,
            studentCourseCode:reqBody.studentCourseCode,
            studentJamatCode:reqBody.studentJamatCode,
            gender:reqBody.gender,
            dateOfBirth:reqBody.dateOfBirth,
            countryName:reqBody.countryName,
            password: hashedPass,
            fullPresentAddress:reqBody.fullPresentAddress,
            fullPermanentAddress:reqBody.fullPermanentAddress,
            admissionSession:reqBody.admissionSession,
            studentMotive:reqBody.studentMotive,
            paymentStatus:reqBody.paymentStatus,
            activeStatus: reqBody.activeStatus,
            userRole: reqBody.userRole,
            userName: reqBody.userName,
            details: reqBody.details,
            admissionDate: reqBody.admissionDate
    
        }
    }
    
    
    studentProfileModel.updateOne({_id:filter}, {$set:postBody},{upsert:true}).then((data)=>{
        res.status(200).json({
            status:"Alhamdulillah",
            data: data
        })
    }).catch((err)=>{
        res.status(400).json({
            status:"Innalillah",
            data: err 
        })
    })
}

//Deleting from database
exports.deleteStudent=(req,res)=>{

    let _id=  req.params.id;

    studentProfileModel.deleteOne({_id:_id}).then((data)=>{
        res.status(200).json({
            status:"Alhamdulillah",
            data: data
        })
    }).catch((err)=>{
        res.status(400).json({
            status:"Innalillah",
            data: err 
        })
    })

}







//Teacher Profile created to Database
exports.createTeacher = (req, res) => {
    const randomInteger = Math.floor(Math.random() * 100) + 1;
    let autoGeneratedname = `Abdullah${randomInteger}`;
    //Receive Post Request Data from req body
    let reqBody = req.body;
    let userName = autoGeneratedname;
    let firstName = reqBody.firstName;
    let lastName = reqBody.lastName;
    let nidNumber =reqBody.nidNumber;
    let birthRegNumber =reqBody.birthRegNumber;
    let fatherName = reqBody.fatherName;
    let emailAddress = reqBody.emailAddress;
    let password = req.headers["passKey"];
    let mobileNumber = reqBody.mobileNumber;
    let teacherCourseCode = reqBody.teacherCourseCode;
    let teacherJamatCode = reqBody.teacherJamatCode;
    let gender = reqBody.gender;
    let dateOfBirth = reqBody.dateOfBirth;
    let countryName = reqBody.countryName;
    let fullPresentAddress = reqBody.fullPresentAddress;
    let fullPermanentAddress = reqBody.fullPermanentAddress;
    let educationalBackground = reqBody.educationalBackground;
    let activeStatus = reqBody.activeStatus;
    let userRole = "teacher";


    //Make res body for posting to the Database

    let postBody={
        userName:userName,
        firstName:firstName,
        lastName:lastName,
        nidNumber: nidNumber,
        birthRegNumber: birthRegNumber,
        fatherName:fatherName,
        emailAddress:emailAddress,
        password: password,
        mobileNumber:mobileNumber,
        teacherCourseCode:teacherCourseCode,
        teacherJamatCode:teacherJamatCode,
        gender:gender,
        dateOfBirth:dateOfBirth,
        countryName:countryName,
        fullPresentAddress:fullPresentAddress,
        fullPermanentAddress:fullPermanentAddress,
        educationalBackground: educationalBackground,
        activeStatus: activeStatus,
        userRole: userRole

       
    };

    // Create Database record
    teacherProfileModel.create(postBody).then((data)=>{
        res.status(200).json({
            status:"Alhamdulillah",
            data: data
        });
    }).catch((err)=>{
        res.status(400).json({
            status: "Innalillah",
            data: err
        })
    });

}

//Read or select Database Record
exports.selectTeachers=(req,res)=>{
    let query=req.headers['userName'];
    let projection=req.body.projection;
    teacherProfileModel.find({userName: query}, projection).then((data)=>{
        res.status(200).json({
            status:"Alhamdulillah",
            data: data
        })
    }).catch((err)=>{
        res.status(400).json({
            status:"Innalillah",
            data: err 
        })
    })
}
//Read all teachers
exports.selectAllTeachers=(req,res)=>{
    let query =req.body.query;
    let projection=req.body.projection;
    teacherProfileModel.find(query, projection).then((data)=>{
        res.status(200).json({
            status:"Alhamdulillah",
            data: data
        })
    }).catch((err)=>{
        res.status(400).json({
            status:"Innalillah",
            data: err 
        })
    })
}


//Update Database Record
exports.updateTeacher= async (req,res)=>{
    
    let reqBody= req.body;
    let filter=reqBody["_id"];
    let hashedPass = await hashedPasswordCustom(reqBody.password);
    var postBody;
    if(hashedPass == null){
        postBody={
            firstName:{
                en:reqBody.firstName.en,
                bn:reqBody.firstName.bn
            },
            lastName:{
                en:reqBody.lastName.en,
                bn:reqBody.lastName.bn
            },
            nidNumber:reqBody.nidNumber,
            birthRegNumber:reqBody.birthRegNumber,
            fatherName:{
                en:reqBody.fatherName.en,
                bn:reqBody.fatherName.bn
            },
            emailAddress:reqBody.emailAddress,
            mobileNumber:reqBody.mobileNumber,
            occupation:reqBody.occupation,
            teacherCourseCode:reqBody.teacherCourseCode,
            teacherJamatCode:reqBody.teacherJamatCode,
            gender:reqBody.gender,
            dateOfBirth:reqBody.dateOfBirth,
            countryName:reqBody.countryName,
            fullPresentAddress:reqBody.fullPresentAddress,
            fullPermanentAddress:reqBody.fullPermanentAddress,
            educationalBackground: reqBody.educationalBackground,
            activeStatus: reqBody.activeStatus,
            userRole: reqBody.userRole,
            userName: reqBody.userName
    
        }
    }else{
        postBody={
            firstName:{
                en:reqBody.firstName.en,
                bn:reqBody.firstName.bn
            },
            lastName:{
                en:reqBody.lastName.en,
                bn:reqBody.lastName.bn
            },
            nidNumber:reqBody.nidNumber,
            birthRegNumber:reqBody.birthRegNumber,
            fatherName:{
                en:reqBody.fatherName.en,
                bn:reqBody.fatherName.bn
            },
            emailAddress:reqBody.emailAddress,
            password:hashedPass,
            mobileNumber:reqBody.mobileNumber,
            occupation:reqBody.occupation,
            teacherCourseCode:reqBody.teacherCourseCode,
            teacherJamatCode:reqBody.teacherJamatCode,
            gender:reqBody.gender,
            dateOfBirth:reqBody.dateOfBirth,
            countryName:reqBody.countryName,
            fullPresentAddress:reqBody.fullPresentAddress,
            fullPermanentAddress:reqBody.fullPermanentAddress,
            educationalBackground: reqBody.educationalBackground,
            activeStatus: reqBody.activeStatus,
            userRole: reqBody.userRole,
            userName: reqBody.userName
    
        }
    }
        

    teacherProfileModel.updateOne({_id:filter}, {$set:postBody},{upsert:true}).then((data)=>{
        res.status(200).json({
            status:"Alhamdulillah",
            data: data
        })
    }).catch((err)=>{
        res.status(400).json({
            status:"Innalillah",
            data: err 
        })
    })
}

//Deleting from database
exports.deleteTeacher=(req,res)=>{

    let _id=  req.params.id;

    teacherProfileModel.deleteOne({_id:_id}).then((data)=>{
        res.status(200).json({
            status:"Alhamdulillah",
            data: data
        })
    }).catch((err)=>{
        res.status(400).json({
            status:"Innalillah",
            data: err 
        })
    })

}