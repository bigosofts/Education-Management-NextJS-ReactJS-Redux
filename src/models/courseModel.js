const mongoose = require("mongoose");

const DataSchema= mongoose.Schema({
    courseCode: {type: String, required: true, unique: true},
    imageLink:{
        type:String,
        required:true
    },
    title:{
        en:{
            type:String,
            required: true
        },
        bn:{
            type:String,
            required: true
        }
    },
    description: {
        en:{
            type:String,
            required: true
        },
        bn:{
            type:String,
            required: true
        }
    },
    categories:{
        en:{
            type:String,
            required: true
        },
        bn:{
            type:String,
            required: true
        }
    },
    createdDate:{type:Date},
    updatedDate:{type:Date},
    startingDate:{
        en:{
            type:Date,
            required: true
        },
        bn:{
            type:String,
            required: true
        }
    },
    popularity: {
        en:{
            type:String,
            required: true
        },
        bn:{
            type:String,
            required: true
        }
    },
    jamatName:{
        type: String,
        required: true,
    },
    activeStatus:{
        type: String,
        required: true,
    }

},{versionKey: false});

const courseModel = mongoose.model("courses",DataSchema);

module.exports = courseModel;