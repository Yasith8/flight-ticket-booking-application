import React, { useState } from 'react'
import '../components/dashboard.css'
import {useNavigate} from 'react-router-dom';


import Sidebar from './Sidebar';




function Dashboard() {

  

 

    return (
    
      <div>
    <div className='row dash-main'>
      <Sidebar/>
    </div>
      
      <div className="col-10 bg-success"></div>
    </div>
  )
}

export default Dashboard