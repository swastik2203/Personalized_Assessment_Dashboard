import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import axios from "axios";
import { useNavigate} from "react-router-dom";
import toast from 'react-hot-toast';

const ForgotPassword = () => {

    const [email,setEmail] = useState("")
    const [newPassword,setNewPassword] = useState("")
    const [answer,setAnswer] = useState("")


    const navigate = useNavigate()

    //form submit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res  = await axios.post('/api/v1/auth/forgot-password',{email,newPassword,answer})
            if(res && res.data.success)
            {
                toast.success(res.data && res.data.message)
                navigate('/login')
            }
            else{
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error('something went wrong')
        }
    };
  return (
    <Layout>
        <div className="register">
        <h1>RESET PASSWORD</h1>
        <form onSubmit={handleSubmit}>
       
        <div className="mb-3">
            <input type="email" required className="form-control" id="exampleInputName" placeholder="Enter Your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
            <input type="text" required className="form-control" id="exampleInputName" placeholder="Name Fav Athelete" value={answer} onChange={(e) => setAnswer(e.target.value)}/>
        </div>

        <div className="mb-3">
            <input type="password" required className="form-control" id="exampleInputPassword1" placeholder="Enter new password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
        </div>
        
        <button type="submit" className="btn btn-primary">RESET</button>
        </form>


    </div>
    </Layout>

  )
}

export default ForgotPassword