import React from 'react'
import { NavLink } from "react-router-dom";
const TeacherMenu = () => {
  return (
    <>
        <div className="text-center">
            <div className="list-group">
                <h4>Teacher Panel</h4>
                <NavLink to="/dashboard/teacher/students" className="list-group-item list-group-item-action">All Students</NavLink>
               </div>
        </div>
    </>
  )
}

export default TeacherMenu