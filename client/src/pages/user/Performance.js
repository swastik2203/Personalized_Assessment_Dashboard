import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

const Performance = () => {
  const [students, setStudents] = useState("");

  const params = useParams()

  console.log(params);

  //get all student 
  const getStudentData = async () => {
    try {
      const { data } = await axios.get(`/api/v1/student/student-data/${params.id}`);
      
      setStudents(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudentData();
  }, []);

  return (
    <Layout>
      <h1>Your Performance</h1>
      {JSON.stringify(students,null,4)}
    </Layout>
  );
};

export default Performance;
