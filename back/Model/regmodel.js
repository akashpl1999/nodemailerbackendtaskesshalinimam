const mongoose=require("mongoose")


const regmodel = new mongoose.Schema({
    

    fname:{

        type:String,
    },
    
    lname:{

        type:String,
    }, 

    email:{

        type:String,
     },

    password:{

        type:String,

    },
    otp:{

        type:Number
    },

    img:{

        type:String

    },

    images:{
     
        type:Array

    }

        
    


})


module.exports  = mongoose.model("register",regmodel )