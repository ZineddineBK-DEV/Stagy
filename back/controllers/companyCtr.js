const  Company =require( '../models/company.js');
const User =require ("../models/user.js");
const { StatusCodes } =require ("http-status-codes");
const { ObjectId } = require("mongodb");



module.exports.updateCompany = async (req, res) => {
    const  body  = {...req.body};
    const ID = req.params.id;
    if (!ObjectId.isValid(ID)) {
        return res.status(StatusCodes.NOT_FOUND).json("ID is not valid");
    }
    try {
        const company = await Company.findByIdAndUpdate(ID,{ $set: body },{new:true});
          res.status(StatusCodes.CREATED).json({message :"company updated successfuly",company});
        }
     catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}
module.exports.getCompanyById = async (req, res) => {
    const ID = req.params.id;
    if (!ObjectId.isValid(ID)) {
        return res.status(StatusCodes.NOT_FOUND).json("ID is not valid");
    }
    try {
        const company = await Company.findById(ID);
        return res.status(StatusCodes.OK).json(company);
    } catch (error) {
        return res.status(500).json(error);
    }
}
module.exports.getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        return res.status(StatusCodes.OK).json(companies);
        } catch (error) {
            return res.status(500).json(error);
            }
}
module.exports.companyDelete =async (req,res) =>{
    const ID = req.params.id;
    if (!ObjectId.isValid(ID)) {
        return res.status(StatusCodes.NOT_FOUND).json("ID is not valid");
        }
        try {
            const company = await Company.findByIdAndDelete(ID);
            await User.findByIdAndRemove(company.user._id);
            return res.status(StatusCodes.OK).json({message :"company removed successfuly" ,company});
            } catch (error) {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
}
}






