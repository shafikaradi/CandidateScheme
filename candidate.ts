import ObjectID from "./monge";

interface Candidate{
    _id:ObjectID,
    nationalID:String,
    firestName:String,
    fatherName:String,
    grandFatherName:String,
    sureName:String,
    birthdate:Date,
    mobilePhone:String,
    email:String,
    username:String,
    subconsistuency:ObjectID,
    password:String,
    election:ObjectID,
    status:Boolean,
    qualification:[String],
    delegatedUser:{
        nationalID:String,
        firestName:String,
        fatherName:String,
        grandFatherName:String,
        sureName:String,
        mobilePhone:String,
        email:String
    },
    attachments:[{
        _id:ObjectID,
        title:String,
        path:String,
        isRequired:Boolean
    }]

}