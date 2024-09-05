import React from 'react'
import Layout from '../../components/Layout/Layout'
import TeacherMenu from '../../components/Layout/TeacherMenu'
import { useAuth } from '../../context/auth'

const TeacherDashboard = () => {

  const [auth] = useAuth();
  // console.log(auth);

  return (
    <Layout>
        <div className="container-fluid m-3 p-3">
            <div className="row">
                <div className="col-md-3">
                    <TeacherMenu/>
                </div>
                <div className="col-md-9">
                    <div className="card w-75 p-3">
                      <h3>Teacher Name : {auth?.user?.name}</h3>
                      <h3>Teacher Email : {auth?.user?.email}</h3>
                      <h3>Teachet Contact : {auth?.user?.phone}</h3>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default TeacherDashboard