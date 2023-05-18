const { StatusCodes } = require("http-status-codes");
const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const Student =require("../models/student.js");
const Compnay =require("../models/company.js");

module.exports.register = async (req, res) => {
    const { email, password, userType } = req.body;

    if (req.body.userType === 'Student') {
    if (!email || !password) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Please Provide All fields");
    }

    const isUserExists = await User.findOne({ email: email });

    if (isUserExists) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("user Already Exists");
    }

    //hashing password
    const hashPassword = await bcrypt.hash(password, 10);
    try {
      const user = await User.create({
        email,
        password: hashPassword,
        userType
      });
      const student = await Student.create({ user: user._id });
      res.status(StatusCodes.CREATED).json(user);

    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).json(error);
    }
  } else if (req.body.userType === 'Company') {
    const { email, password, userType } = req.body;

    if (!email || !password) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Please Provide All fields");
    }

    const isUserExists = await User.findOne({ email: email });

    if (isUserExists) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("user Already Exists");
    }

    //hashing password
    const hashPassword = await bcrypt.hash(password, 10);
    try {
      const user = await User.create({
        email,
        password: hashPassword,
        userType
      });
      const compnay = await Compnay.create({ user: user._id });
      res.status(StatusCodes.CREATED).json(user);

    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).json(error);
    }


  }

};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  if ((!email && !password) || !password) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Please Provide All the fields");
  }

  const isUser = await User.findOne({
    email: email
  });

  if (!isUser) {
    return res.status(StatusCodes.NOT_FOUND).json("user not found");
  }

  //compare password
  const comparePassword = await bcrypt.compare(password, isUser.password);

  if (!comparePassword) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Please Make Sure You have entered Correct Password!");
  }

  res.status(StatusCodes.CREATED).json({ message: "login success", isUser});
};
