const  mongoose =require ("mongoose");
const validator =require('validator')


const userSchema = new mongoose.Schema({
  
  email: {
    type: String,
    required: [true, "please provide a email"],
    unique: true,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: "Please Provide Email",
    },
  },
  password: {
    type: String,
    required: [true,"Please Provide Password"],
    minlength: 8,
    trim: true,
  },
  userType:{
    type: String,
    required: [true,"Please Provide the account nature"],
  },
 
});

module.exports= mongoose.model("User", userSchema);