const express =require ("express");
const router = express.Router();
const jobCtr = require("../controllers/jobCtr.js");
  

router.post("/",jobCtr.postJob);
router.get("/:id",jobCtr.getJobById);
router.get("/",jobCtr.getAllJobs);
router.delete("/:id" , jobCtr.deleteJob);
router.get('/getSavedJobs',jobCtr.getSavedJobs);
router.patch('/saveJob/:id',jobCtr.SaveJob);
router.patch('/unsaveJob/:id',jobCtr.UnsaveJob);
module.exports= router;