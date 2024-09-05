import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreateProfile = () => {

  const navigate = useNavigate()

  const [name,setName] = useState("")
  const [branch,setBranch] = useState("")
  const [year,setYear] = useState("")
  const [currsem,setCurrsem] = useState("")
  const [currgpa,setCurrgpa] = useState("")
  const [firstgpa,setFirstgpa] = useState("")
  const [secondgpa,setSecondgpa] = useState("")
  const [thirdgpa,setThirdgpa] = useState("")
  const [fourthgpa,setFourthgpa] = useState("")
  const [fifthgpa,setFifthgpa] = useState("")
  const [sixthgpa,setSixthgpa] = useState("")
  const [seventhgpa,setSeventhgpa] = useState("")
  const [eightgpa,setEightgpa] = useState("")


  //submit  function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const item = JSON.parse((localStorage.getItem('auth')));
    const id = item.user._id;
    try {
      const student = {
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
      userId: id,
      }
      // console.log(student);
      const { data } = axios.post(
        "/api/v1/student/student-form",
        student
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Student data uploaded Successfully");
        navigate(`/dashboard/student/performance/${id}`);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  

  return (
    <Layout>
      <div className='container text-center d-flex justify-content-center m-5'>
      
       <form  className='d-flex justify-content-center'>
         <div className='row w-75'>
            <div className='d-flex flex-column justify-content-center'>
                <div className="mb-3 ">
                    <input type="text" className="form-control" id="exampleInputText1" placeholder='Your FullName' value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <input type="text" className="form-control" id="exampleInputText1" placeholder='Your Branch' value={branch} onChange={(e)=>setBranch(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="exampleInputText1" placeholder='Year Of Passing Out' value={year} onChange={(e)=>setYear(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="exampleInputText1" placeholder='Current Semester' value={currsem} onChange={(e)=>setCurrsem(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <input type="text" className="form-control" id="exampleInputText1" placeholder='Current Semester CGPA' value={currgpa} onChange={(e)=>setCurrgpa(e.target.value)}/>
                </div>

            </div>
           
        <div className="col-md-6">
            <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputText1" placeholder='1st Semester CGPA' value={firstgpa} onChange={(e)=>setFirstgpa(e.target.value)}/>
            </div>

            <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputText1" placeholder='2nd Semester CGPA' value={secondgpa} onChange={(e)=>setSecondgpa(e.target.value)}/>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputText1" placeholder='3rd Semester CGPA' value={thirdgpa} onChange={(e)=>setThirdgpa(e.target.value)}/>
            </div>

            <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputText1" placeholder='4th Semester CGPA'value={fourthgpa} onChange={(e)=>setFourthgpa(e.target.value)}/>
            </div>
        </div>

        <div className="col-md-6">
            <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputText1" placeholder='5th Semester CGPA' value={fifthgpa} onChange={(e)=>setFifthgpa(e.target.value)}/>
            </div>

            <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputText1" placeholder='6th Semester CGPA' value={sixthgpa} onChange={(e)=>setSixthgpa(e.target.value)}/>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputText1" placeholder='7th Semester CGPA' value={seventhgpa} onChange={(e)=>setSeventhgpa(e.target.value)}/>
            </div>

            <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputText1" placeholder='8th Semester CGPA' value={eightgpa} onChange={(e)=>setEightgpa(e.target.value)}/>
            </div>
        </div>
        
       
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
        </form>
    </div>
      
       
    </Layout>
  )
}

export default CreateProfile