import React from 'react'
import '../components/dashboard.css'

import { HiPaperAirplane } from "react-icons/hi2";
import { IoHome } from "react-icons/io5";
import { FaBookMedical } from "react-icons/fa";
import { MdBookmarkRemove } from "react-icons/md";
import { MdBookmarkAdded } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import { FaRegCalendarTimes } from "react-icons/fa";




function Dashboard() {
  return (
    
    <div className='row dash-main'>
      {/* sidebar start */}
      <div className="col-2 bg-info d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">
      {/* <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"> */}
    <a href="/dashboard" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
      <HiPaperAirplane width={60} height={62} className='w-100'/>
      <span class="fs-4">Tickety</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto side-ul">
      {/* <li class="nav-item ">
        <a href="#" class="nav-link active" aria-current="page">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"/></svg>
          <IoHome className='me-2' />
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-body-emphasis active">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"/></svg>
          <FaBookMedical />
          Ticket Booking
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-body-emphasis">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"/></svg>
          Ticket Checking
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-body-emphasis">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"/></svg>
          Airline Shadule
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-body-emphasis">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg>
          Cancel Ticket
        </a>
      </li> */}

      <li>
        <a href="/dashboard" className='nav-item row'>
          <div className="col-3"><IoHome/></div>
          <div className="col-9">Home</div>
          
          
        </a>
      </li>

      <li>
        <a href="/booking" className='nav-item row'>
          <div className="col-3"><FaBookMedical/></div>
          <div className="col-9"> Ticket Booking</div>
        </a>
      </li>

      <li>
        <a href="/checking" className='nav-item row'>
          <div className="col-3"><MdBookmarkAdded/></div>
          <div className="col-9">Ticket Checking</div>
        </a>
      </li>

      <li>
        <a href="/cancel" className='nav-item row'>
          <div className="col-3"><MdBookmarkRemove/></div>
          <div className="col-9">Ticket Canceling</div>
        </a>
      </li>

      <li>
        <a href="/cancel" className='nav-item row'>
          <div className="col-3"><MdEditDocument/></div>
          <div className="col-9">Ticket Editing</div>
        </a>
      </li>

      <li>
        <a href="/cancel" className='nav-item row'>
          <div className="col-3"><FaRegCalendarTimes/></div>
          <div className="col-9">Flight Shadule</div>
        </a>
      </li>

      
    </ul>
    <hr/>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/yasith8.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
        <strong>Admin</strong>
      </a>
      <ul class="dropdown-menu text-small shadow">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><hr class="dropdown-divider"/></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  {/* </div> */}
      </div>
      {/* sidebar end */}
      <div className="col-10 bg-success">2</div>
    </div>
  )
}

export default Dashboard