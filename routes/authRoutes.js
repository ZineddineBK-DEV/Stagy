import express from "express";
const router = express.Router();
import { 
  register, 
  login, 
  searchUser,
  updateUserName,
  updateUserBio,
  updateUserAvatar,
  updateUserPassword,
  getUserInfo
} from "../controllers/authCtr.js";


// import authenticateUser from "../middleware/auth.js";

router.route("/register").post(register);
router.route("/login").post(login);
// router.route("/users").get(authenticateUser, searchUser);
// router.route("/getUserinfos/:id").get(authenticateUser,getUserInfo);
// //update user infos

// router.route("/updateUserName/:id").patch(authenticateUser,updateUserName);
// router.route("/updateUserBio/:id").patch(authenticateUser,updateUserBio);
// router.route("/updateUserAvatar/:id").patch(authenticateUser,updateUserAvatar);
// router.route("/updateUserPassword/:id").patch(authenticateUser,updateUserPassword);



export default router;
