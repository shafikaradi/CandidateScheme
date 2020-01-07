import ObjectID from './monge'
interface entity{

    _id:ObjectID,
    entityNumber:Number,
    namr:String,
    logo:String,
    owener:String,
    email:String,
    address:Date,
    electionId:ObjectID
    status:Boolean,
    entityStaff:[
        {
            id:ObjectID,
            name:String,
            firstName:String,
            fatherName:String,
            grandFatherName:String,
            sureName:String,
            email:String,
            mobilePhone:String,
            adress:String,
            nationalID:String,
            type:String,
            IdentityNumber:Number,
            status:Boolean

        }
    ],
    attachments:[{
        _id:ObjectID,
        title:String,
        path:String,
        isRequired:Boolean
    }]

}