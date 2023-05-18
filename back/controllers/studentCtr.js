const Student =require ("../models/student.js");
const User =require ("../models/user.js");
const bcrypt =require ("bcryptjs");
const { StatusCodes } =require ("http-status-codes");
const { ObjectId } = require("mongodb");


module.exports.studentUpdate = async (req, res) => {
    const body = { ...req.body };
    const ID = req.params.id;
    if (!ObjectId.isValid(ID)) {
        return res.status(StatusCodes.NOT_FOUND).json("ID is not valid");
    }
    if (body.password) {
        try {
            body.password = await bcrypt.hash(body.password, 10);
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Bcrypt failed");
        }
    }
    try {
        const student = await Student.findByIdAndUpdate(ID, { $set: body }, { new: true });
        return res.status(StatusCodes.OK).json(student);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
}

module.exports.studentDelete =async (req,res) =>{
    const ID = req.params.id;
    if (!ObjectId.isValid(ID)) {
        return res.status(StatusCodes.NOT_FOUND).json("ID is not valid");
        }
        try {
            const student = await Student.findByIdAndDelete(ID);
            await User.findByIdAndRemove(student.user._id);
            return res.status(StatusCodes.OK).json({message :"student removed successfuly",student});
            } catch (error) {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
}
}
module.exports.getStudentById = async(req,res) =>{
    const ID = req.params.id;
    if (!ObjectId.isValid(ID)) {
        return res.status(StatusCodes.NOT_FOUND).json("ID is not valid");
        }
        try {
            const student = await Student.findById(ID);
            return res.status(StatusCodes.OK).json(student);
            } catch (error) {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
}
}
module.exports.getAllStudents =async (req,res) =>{
    try {
        const students = await Student.find();
        res.status(StatusCodes.OK).json(students);    
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
}

