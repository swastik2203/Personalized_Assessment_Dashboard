import express from "express";

import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { singleDataController, studentController, studentDataController } from "../controllers/studentController.js";

//router object
const router = express.Router();

//routing
//student-form-data
router.post('/student-form',studentController)

//student data in performace page
router.get('/student-data',studentDataController)

//single student
router.get('/student-data/:id',singleDataController)







export default router;
