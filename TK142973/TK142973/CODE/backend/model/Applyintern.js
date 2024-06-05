const mongoose = require("mongoose")


const Applyintern = new mongoose.Schema({
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Students'
    },
    job:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Jobs'
    },
    date:{
        type:Date
    },
    resumes:{
        type:String
    }
})


let Applys = mongoose.model('Applyintern',Applyintern)

module.exports = Applys