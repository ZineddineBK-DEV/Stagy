const { StatusCodes } =require ("http-status-codes");
const Job =require ("../models/job.js")

module.exports.favorite=async (req,res) =>{
    try{
        const jobs = await Job.find({saved:true})
        res.status(StatusCodes.OK).json(jobs);
    }catch(error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
}
module.exports.search = async (req,res) =>{
    var titleSearch = req.body.title;
    if (titleSearch) {
        titleSearch = titleSearch.trim().length === 0 ? null : titleSearch;
      }
    try {
        const result = Job.title.find({title:titleSearch})
        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json(error)
    }
}