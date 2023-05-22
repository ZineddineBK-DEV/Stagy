
const express =require ("express");
const router = express.Router();
const jobCtr = require("../controllers/savedJobs.js");

router.get('/favorite',jobCtr.favorite)
router.post('/searchJobs',jobCtr.search);


module.exports= router;