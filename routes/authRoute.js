import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotpasswordController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//ForgotPassword || POST
router.post('/forgot-password',forgotpasswordController)


//test routes
router.get("/test", requireSignIn, isAdmin, testController);


//protected route auth
router.get('/user-auth',requireSignIn,(req,res) => {
  res.status(200).send({ok: true});
})

router.get('/admin-auth',requireSignIn,isAdmin,(req,res) => {
  res.status(200).send({ok: true});
})

export default router;
