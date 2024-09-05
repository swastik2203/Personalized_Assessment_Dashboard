import studentModel from "../models/studentModel.js";
import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";
import slugify from 'slugify'


//post student form data
export const studentController = async (req, res) => {
  try {
    console.log(req.body);
    const {
      name,
      branch,
      year,
      currsem,
      currgpa,
      firstgpa,
      secondgpa,
      thirdgpa,
      fourthgpa,
      fifthgpa,
      sixthgpa,
      seventhgpa,
      eightgpa,
      userId,
    } = req.body;

    //validations
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!branch) {
      return res.send({ error: "branch is Required" });
    }
    if (!year) {
      return res.send({ error: "year is Required" });
    }
    if (!currsem) {
      return res.send({ error: "currsem is Required" });
    }
    if (!currgpa) {
      return res.send({ error: "currgpa is Required" });
    }

    //save
    const student = await new studentModel({...req.body,slug:slugify(name)}).save();
    const updatedUser = await userModel.findByIdAndUpdate(
      student.userId,
      {
        student: student._id,
      },
      {
        new: true,
      }
    )
    console.log(updatedUser);
    // const data = userModel.find().populate('student')
    // localStorage.setItem('studentdata',student)
    // console.log(student);
    res.status(201).send({
      success: true,
      message: "student data uploaded Successfully",
      student,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in uploading student data",
      error,
    });
  }
};

//get all student
export const studentDataController = async(req,res) => {
  try {
    const students = await studentModel.find({});
    res.status(200).send({
        success:true,
        message:"all students",
        students,
    })
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting student data",
      error,
    });
  }
}

//get single student
export const singleDataController = async(req,res) => {
  try {
    // console.log("aaaaa");
    const {id} = req.params;
    // console.log(id);
    const user = await userModel.find({_id:id}).populate("student")
    console.log(user);
    // const student = await studentModel.findById(user.student)
    // console.log(user.student);
    // console.log(student);
    res.json(user); 
    // res.status(200).json(user);
    // const data = user.student

    // console.log(user);
    // res.status(201).send({
    //   success:true,
    //   user
    // })
    
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting single student data",
      error,
    });
  }
}
