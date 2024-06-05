const mongoose = require('mongoose')


const ApplySchema = new mongoose.Schema({
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
    resume:{
        type:String
    }
})


let Apply = mongoose.model('ApplySchema',ApplySchema)

module.exports = Apply
