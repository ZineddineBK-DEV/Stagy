import { StatusCodes } from "http-status-codes";
import User from "../models/user.js";
import bcrypt from "bcryptjs";


const register = async (req, res) => {
    const { username, email, password } = req.body;
  
    if (!username || !email || !password) {
      console.log("Please Provide All fields");
    }
  
    const isUserExists = await User.findOne({ email: email });
  
    if (isUserExists) {
        console.log("User Already Exists");
    }
  
    //hashing password
    const hashPassword = await bcrypt.hash(password, 10);
  
    const user = await User.create({
      username,
      email,
      password: hashPassword,
     
    });
  
    res.status(StatusCodes.CREATED).json(user);
  };
  
  const login = async (req, res) => {
    const { username, email, password } = req.body;
  
    if ((!username && !email) || !password) {
        console.log("Please Provide All the fields");
    }
  
    const isUser = await User.findOne({
       email: email 
    });
  
    if (!isUser) {
        console.log("Invalid Credentials");
    }
  
    //compare password
    const comparePassword = await bcrypt.compare(password, isUser.password);
  
    if (!comparePassword) {
        console.log("Please Make Sure You have entered Correct Password!");
    }

    res.status(StatusCodes.OK).json({message:"login success"});
  };



  export { 
    register, 
    login, 
    searchUser,
    getUserInfo,
    updateUserName,
    updateUserBio ,
    updateUserAvatar,
    updateUserPassword 
  };