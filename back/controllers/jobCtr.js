const { StatusCodes } =require ("http-status-codes");
const Job =require ("../models/job.js")
const { ObjectId } = require("mongodb");


module.exports.postJob = async (req,res) =>{
    const body = {...req.body};
    try {
        const job = await Job.create(body)
        res.status(StatusCodes.CREATED).json(job)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
};
module.exports.getJobById = async (req,res) =>{
    const ID = req.params.id;
    if (!ObjectId.isValid(ID)) {
        return res.status(StatusCodes.NOT_FOUND).json("ID is not valid");
    }
    try {
        const job = await Job.findById(ID);
        res.status(StatusCodes.OK).json(job);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
}

module.exports.deleteJob = async (req,res) => {
    const ID = req.params.id;
    if (!ObjectId.isValid(ID)) {
        return res.status(StatusCodes.NOT_FOUND).json("ID is not valid");
        }
        try {
            const job = await Job.findByIdAndDelete(ID);
            res.status(StatusCodes.OK).json({message :"job removed successfuly" ,job});
            } catch (error) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
                }
}

module.exports.getAllJobs = async (req,res) =>{
    try {
        const jobs = await Job.find();
        res.status(StatusCodes.OK).json(jobs);
    }
    catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
        }
}

module.exports.getSavedJobs= async (req,res) => {
    try {
        const jobs = await Job.find({ saved : true });
        res.status(StatusCodes.OK).json(jobs);
        }
    catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
        }
}
module.exports.SaveJob= async (req,res) => {
    const ID = req.params.id;
    if (!ObjectId.isValid(ID)) {
        return res.status(StatusCodes.NOT_FOUND).json("ID is not valid");
    }
    try {
        const job = await Job.findByIdAndUpdate(ID,{saved:true});
        res.status(StatusCodes.OK).json(job);
        }
    catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
        }
}
module.exports.UnsaveJob= async (req,res) => {
    const ID = req.params.id;
    if (!ObjectId.isValid(ID)) {
        return res.status(StatusCodes.NOT_FOUND).json("ID is not valid");
    }
    try {
        const job = await Job.findByIdAndUpdate(ID,{saved:false});
        res.status(StatusCodes.OK).json(job);
        }
    catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
        }
}
