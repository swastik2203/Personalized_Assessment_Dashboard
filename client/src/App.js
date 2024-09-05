import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import PrivateRoute from "./components/Layout/Routes/Private";
import Dashboard from "./pages/user/Dashboard";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import CreateProfile from "./pages/user/CreateProfile";
import Performance from "./pages/user/Performance";
import TeacherRoute from "./components/Layout/Routes/TeacherRoute";
import TeacherDashboard from "./pages/admin/TeacherDashboard"
import Allstudents from "./pages/admin/Allstudents";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/dashboard" element={<PrivateRoute/>}>
            <Route path='student' element={<Dashboard/>}/>
            <Route path='student/create-profile' element={<CreateProfile/>}/>
            <Route path='student/performance/:id' element={<Performance/>}/>
        </Route>

        <Route path="/dashboard" element={<TeacherRoute/>}>
          <Route path='teacher' element={<TeacherDashboard/>}/>
          <Route path='teacher/students' element={<Allstudents/>}/>
        </Route>

        <Route path='/register' element={<Register/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>

        <Route path='/login' element={<Login/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
