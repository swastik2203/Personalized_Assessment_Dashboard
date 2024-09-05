import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
    },
    branch: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    currsem: {
      type: Number,
      required: true,
    },
    currgpa: {
      type: Number,
      required: true,
    },
    firstgpa: {
      type: Number,
      required: true,
      default: 0,
    },
    secondgpa: {
      type: Number,
      default: 0,
    },
    thirdgpa: {
      type: Number,
      default: 0,
    },
    fourthgpa: {
      type: Number,
      default: 0,
    },
    fifthgpa: {
      type: Number,
      default: 0,
    },
    sixthgpa: {
      type: Number,
      default: 0,
    },
    seventhgpa: {
      type: Number,
      default: 0,
    },
    eightgpa: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("student_datas", studentSchema);
