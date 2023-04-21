const mongoose=require("mongoose");
const bcrypt=require("bcryptjs")
const userSchema=mongoose.Schema({
    firstname:{
        requied:[true,'First name required'],
        type:String,
    },
    lasttname:{
        requied:[true,'Last name required'],
        type:String,
    },
    email:{
        requied:[true,'email required'],
        type:String,
    },
    password:{
        requied:[true,'password required'],
        type:String,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },

},{
    timestamp:true,
});
userSchema.pre("save",async function(next){
   if(!this.isModified('password'))
   {
    next();
   } 
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password, salt);
    next();
})
const User=mongoose.model('User',userSchema)
module.exports=User;