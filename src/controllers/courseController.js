const courseModel = require("../models/courseModel");

exports.createCourse = (req, res) => {
    //Receive Post Request Data from req body
    let reqBody = req.body;
    let title =reqBody.title;
    let courseCode =reqBody.courseCode;
    let description =reqBody.description;
    let imageLink =reqBody.imageLink;
    let categories =reqBody.categories;
    let createdDate = new Date(Date.now()).toISOString();
    let updatedDate = new Date(Date.now()).toISOString();
    let startingDate = reqBody.startingDate;
    let popularity = reqBody.popularity;
    let jamatName = reqBody.jamatName;
    let activeStatus = reqBody.activeStatus;

    //Make res body for posting to the Database

    let postBody={
        imageLink:imageLink,
        title:title,
        courseCode:courseCode,
        description:description,
        categories:categories,
        createdDate:createdDate,
        updatedDate:updatedDate,
        startingDate:startingDate,
        popularity:popularity,
        jamatName:jamatName,
        activeStatus: activeStatus
    };

    // Create Database record
    courseModel.create(postBody).then((data)=>{
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
exports.selectCourses=(req,res)=>{
    let query=req.body.query;
    let projection=req.body.projection
    courseModel.find(query, projection).then((data)=>{
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
exports.updateCourse=(req,res)=>{
    let reqBody= req.body;
    let filter=reqBody["_id"];
    let postBody={
        courseCode : reqBody.courseCode,
        imageLink: reqBody.imageLink,
        title: {
            en: reqBody.title.en,
            bn: reqBody.title.bn
        },
        description: {
            en: reqBody.description.en,
            bn: reqBody.description.bn,
        },
        categories: {
            en: reqBody.categories.en,
            bn: reqBody.categories.bn,
        },
        updatedDate: new Date(Date.now()).toISOString(),
        startingDate: {
            en: reqBody.startingDate.en,
            bn: reqBody.startingDate.bn,
        },
        popularity: {
            en: reqBody.popularity.en,
            bn: reqBody.popularity.bn,
        },
        jamatName:reqBody.jamatName,
        activeStatus: reqBody.activeStatus
    }

    courseModel.updateOne({_id:filter}, {$set:postBody},{upsert:true}).then((data)=>{
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
exports.deleteCourse=(req,res)=>{

    let _id=  req.params.id;

    courseModel.deleteOne({_id:_id}).then((data)=>{
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