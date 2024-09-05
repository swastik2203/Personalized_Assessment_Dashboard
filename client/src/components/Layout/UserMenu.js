import React,{useState,useEffect} from 'react'
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  const [items, setItems] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    const items = JSON.parse(localStorage.getItem('auth'));
    if (items) {
    setItems(items);
    }
  };
  fetchData();
}, []);  

// useEffect(() => {\
  
//   const items = JSON.parse(localStorage.getItem('auth'));
//   if (items) {
//    setItems(items);
//   }
// }, []);
// console.log(items);
  return (
    <>
        {items && items.user ?(<div className="text-center">
            <div className="list-group">
                  <div>
                    <h4>Student Portal</h4>
                  <NavLink to="/dashboard/student/create-profile" className="list-group-item list-group-item-action">Profile</NavLink>
                  <NavLink to={`/dashboard/student/performance/${items?.user._id}`} className="list-group-item list-group-item-action">Performance</NavLink>
                  </div>
            </div>
        </div>):(<h1>Loading</h1>)}
    </>
  )
}

export default UserMenu