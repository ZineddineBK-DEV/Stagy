const express =require ("express");
const router = express.Router();
const companyCtr = require("../controllers/companyCtr.js");


router.get("/", companyCtr.getAllCompanies);
router.get("/:id", companyCtr.getCompanyById);
router.put("/:id", companyCtr.updateCompany);
router.delete("/:id", companyCtr.companyDelete);


module.exports= router;
