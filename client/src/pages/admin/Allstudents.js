import React,{useEffect,useState} from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios';

const Allstudents = () => {

  const [students, setStudents] = useState("");

  //get all student 
  const getStudentData = async () => {
    try {
      const { data } = await axios.get(`/api/v1/student/student-data`);

      setStudents(data.students);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudentData();
  }, []);

  return (
    <Layout>
        <h1>All Students</h1>
        {JSON.stringify(students,null,4)}

    </Layout>
  )
}

export default Allstudents