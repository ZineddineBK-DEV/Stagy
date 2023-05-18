const express =require ("express");
const router = express.Router();
const authCtr =require ("../controllers/authCtr.js");



router.post("/register" ,authCtr.register);
router.post("/login",authCtr.login);

module.exports = router;
