import React, { useEffect, useRef, useState } from 'react'
import Sidebar from './Sidebar'

import '../components/booking.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Booking() {

 
  const [select,setSelect]=useState(0);

  const [seatCount,setSeatCount]=useState(select);
  const [toggleSeat,setToggleSeat]=useState(new Set());

  const ticketCountHandler=(e)=>{
    setSelect(e.target.value);
    console.log(e.target.value);
    setSeatCount(e.target.value)
  }

  const ticketCount=Array.from({ length: 10 }, (_, index) => index + 1);
  
  


  const seatCountHandler=(e)=>{
    e.preventDefault();


    // Convert the value to a number (optional).
    let numberChanged = Number(e.target.value);
    // Check if the Set() has the number,
    if (!toggleSeat.has(numberChanged)) {
      if(seatCount>0){

        setToggleSeat(prev => new Set(prev.add(numberChanged)));
        setSeatCount(prev => prev - 1);
      }else{
        setToggleSeat(prev => new Set(prev.add(numberChanged)));
        setSeatCount(0);

      }
    }
    else {
        setToggleSeat(prev => {
            prev.delete(numberChanged);
            return new Set(prev);
        });
        setSeatCount(prev => prev + 1);
    }


   /*  //console.log(seatCount)
    
    setToggleSeat(!toggleSeat); 
    
    if(!toggleSeat){
      setSeatCount(prev=>prev-1)
    }else{
      setSeatCount(prev=>prev+1)
    }
  */
  }



  return (
   
    <div className='row dash-main'>
      <Sidebar/>
   
      
      <div className="col-10 book-main">
          <h2 className='text-center py-3 text-light'>Book a Ticket</h2>
        <div className='m-2 bg-white p-3'>

          {/* form start */}
          <form action="" method='post'>

            {/* customer name label start */}
            <div className="row">
              <div>
                <label htmlFor="username">
                  Customer Name:
                </label>
              </div>
            </div>
            {/* customer name label end */}

            {/* customer name input start */}
            <div className="row mt-2">
              <div>
                <input type="text" className='form-control'placeholder='Enter your Fullname'/>
              </div>
            </div>
            {/* customer name input end */}


            <div className="row mt-3">

            {/* travel date label start*/}
            <div className="col-4">
              <label htmlFor="date">Travel Date:</label><br />
            </div>
            {/* travel date label end*/}


            {/* destination label start*/}
            <div className="col-4">
              <label htmlFor="destination">Travel Destination:</label><br />
            </div>
            {/* destination label end*/}



            {/* preferd airport label start*/}
            <div className="col-4">
              <label htmlFor="airport">Preferred Airpport:</label><br />
            </div>
            {/* preferd airport label end*/}

            </div>


            <div className="row mt-2">

            {/* travel date input start*/}
            <div className="col-4">
              <input type="date" className='form-control' id="date" />
            </div>
            {/* travel date input end*/}


            {/* destination input start*/}
            <div className="col-4">
              <input type="input" className='form-control' id="destination" placeholder='Enter your Destination'/>
            </div>
            {/* destination input end*/}



            {/* preferd airport input start*/}
            <div className="col-4">
              <select id="airport" className='form-select'>
                <option value="" selected disabled hidden>Select an Airport...</option>
                <option value="Colombo">Colombo</option>
                <option value="Melborne">Melborne</option>
                <option value="Durban">Durban</option>
                <option value="London">London</option>
              </select>
            </div>
            {/* preferd airport input end*/}

            </div>


            <div className="row mt-3">

              {/*passport label start */}
              <div className="col-3">
                <label htmlFor="passport">Passport No:</label>
              </div>
              {/*passport label end */}


              {/*nic label start */}
              <div className="col-3">
                <label htmlFor="nic">NIC No</label>
              </div>
              {/*nic label end */}
              
              
              {/*mobile label start */}
              <div className="col-3">
                <label htmlFor="mobile">Mobile No:</label>
              </div>
              {/*mobile label end */}
              
              
              {/*land label start */}
              <div className="col-3">
                <label htmlFor="email">Email:</label>
              </div>
              {/*land label end */}

            </div>


            <div className="row mt-2">

              {/*passport input start */}
              <div className="col-3">
                <input type="text" id='passport' className='form-control' placeholder='Enter Your Passport Number'/>
              </div>
              {/*passport input end */}
              
              
              {/*nic input start */}
              <div className="col-3">
                <input type="text" id='nic' className='form-control' placeholder='Enter Your NIC Number'/>
              </div>
              {/*nic input end */}
              
              
              {/*mobile input start */}
              <div className="col-3">
                <input type="text" id='mobile' className='form-control' placeholder='Enter Your Mobile Number'/>

              </div>
              {/*mobile input end */}


              {/*land input start */}
              <div className="col-3">

                <input type="email" id='email' className='form-control' placeholder='Enter Your Email Address'/>
              </div>
              {/*land input end */}
            </div>


            <div className="row mt-3">
              {/*type label start */}
              <div className="col-4"><label htmlFor="type">Ticket Type:</label></div>
              {/*type label end */}
              {/*count label start */}
              <div className="col-4"><label htmlFor="count">Ticket Count:</label></div>
              {/*count label end */}
              {/*seat label start */}
              <div className="col-4"><label htmlFor="count">Seat Select:</label></div>
              {/*seat label end */}
            </div>


            <div className="row mt-2">
              {/*type label start */}
              <div className="col-4">
                <select id="type" className='form-select'>
                  <option value="" selected disabled hidden>Select Ticket Type</option>
                  <option>First Class</option>
                  <option>Business Class</option>
                  <option>Economy Class</option>
                </select>
              </div>
              {/*type label end */}
              {/*count inputl start */}
              <div className="col-4">
              <select id="count" value={select} onChange={ticketCountHandler} className='form-select'>
                  <option selected disabled hidden>Select Ticket Count(max 10)</option>
                  {ticketCount.map((value) => (
                  <option key={value} value={value}>
                           {value}
                      </option>
                   ))}
                  
                </select>
              </div>
              {/*count input end */}
              {/*seat label start */}
              <div className="col-4">
            
<button type="button" class="btn form-control" data-bs-toggle="modal" data-bs-target="#seat-count">
  Select Seats
</button>


<div class="modal fade" id="seat-count" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Your Ticket Count {seatCount}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

        {/* static seat number: until add dynamic seat count for each different airlines   ----start */}
        <div className="row">
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className='btn seat-btn disabled bg-danger'>100</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(101)?"bg-primary":""}`} value={101} onClick={seatCountHandler}>101</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(102)?"bg-primary":""}`} value={102} onClick={seatCountHandler}>102</button></div>
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(103)?"bg-primary":""}`} value={103} onClick={seatCountHandler}>103</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(104)?"bg-primary":""}`} value={104} onClick={seatCountHandler}>104</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(105)?"bg-primary":""}`} value={105} onClick={seatCountHandler}>105</button></div>
          <div className="col-1"></div>
          <div className="col-1"></div>
        </div>

        <div className="row">
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(106)?"bg-primary":""}`} value={106} onClick={seatCountHandler}>106</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(107)?"bg-primary":""}`} value={107} onClick={seatCountHandler}>107</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(108)?"bg-primary":""}`} value={108} onClick={seatCountHandler}>108</button></div>
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(109)?"bg-primary":""}`} value={109} onClick={seatCountHandler}>109</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(110)?"bg-primary":""}`} value={110} onClick={seatCountHandler}>110</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(111)?"bg-primary":""}`} value={111} onClick={seatCountHandler}>111</button></div>
          <div className="col-1"></div>
          <div className="col-1"></div>
        </div>

        <div className="row">
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(112)?"bg-primary":""}`} value={112} onClick={seatCountHandler}>112</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn bg-warning'>113</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn bg-warning'>114</button></div>
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(115)?"bg-primary":""}`} value={115} onClick={seatCountHandler}>115</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn disabled bg-danger'>116</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(117)?"bg-primary":""}`} value={117} onClick={seatCountHandler}>117</button></div>
          <div className="col-1"></div>
          <div className="col-1"></div>
        </div>

        <div className="row">
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(118)?"bg-primary":""}`} value={118} onClick={seatCountHandler}>118</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn disabled bg-danger'>119</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(120)?"bg-success":""}`} value={120} onClick={seatCountHandler}>120</button></div>
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(121)?"bg-primary":""}`} value={121} onClick={seatCountHandler}>121</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(122)?"bg-primary":""}`} value={122} onClick={seatCountHandler}>122</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(123)?"bg-primary":""}`} value={123} onClick={seatCountHandler}>123</button></div>
          <div className="col-1"></div>
          <div className="col-1"></div>
        </div>



        <div className="row">
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(209)?"bg-primary":""}`} value={209} onClick={seatCountHandler}>209</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(210)?"bg-primary":""}`} value={210} onClick={seatCountHandler}>210</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(211)?"bg-primary":""}`} value={211} onClick={seatCountHandler}>211</button></div>
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(212)?"bg-primary":""}`} value={212} onClick={seatCountHandler}>212</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(213)?"bg-primary":""}`} value={213} onClick={seatCountHandler}>213</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(214)?"bg-primary":""}`} value={214} onClick={seatCountHandler}>214</button></div>
          <div className="col-1"></div>
          <div className="col-1"></div>
        </div>


        <div className="row">
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(215)?"bg-primary":""}`} value={215} onClick={seatCountHandler}>215</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(216)?"bg-primary":""}`} value={216} onClick={seatCountHandler}>216</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(217)?"bg-primary":""}`} value={217} onClick={seatCountHandler}>217</button></div>
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(218)?"bg-primary":""}`} value={218} onClick={seatCountHandler}>218</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(219)?"bg-primary":""}`} value={219} onClick={seatCountHandler}>219</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(220)?"bg-primary":""}`} value={220} onClick={seatCountHandler}>220</button></div>
          <div className="col-1"></div>
          <div className="col-1"></div>
        </div>


        <div className="row">
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(221)?"bg-primary":""}`} value={221} onClick={seatCountHandler}>221</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn disabled bg-danger'>222</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn disabled bg-danger'>223</button></div>
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(224)?"bg-primary":""}`} value={224} onClick={seatCountHandler}>224</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(225)?"bg-primary":""}`} value={225} onClick={seatCountHandler}>225</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(226)?"bg-primary":""}`} value={226} onClick={seatCountHandler}>226</button></div>
          <div className="col-1"></div>
          <div className="col-1"></div>
        </div>


        <div className="row">
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(227)?"bg-primary":""}`} value={227} onClick={seatCountHandler}>227</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(228)?"bg-primary":""}`} value={228} onClick={seatCountHandler}>228</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(229)?"bg-primary":""}`} value={229} onClick={seatCountHandler}>229</button></div>
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(230)?"bg-primary":""}`} value={230} onClick={seatCountHandler}>230</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(231)?"bg-primary":""}`} value={231} onClick={seatCountHandler}>231</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(232)?"bg-primary":""}`} value={232} onClick={seatCountHandler}>232</button></div>
          <div className="col-1"></div>
          <div className="col-1"></div>
        </div>


        <div className="row">
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className='btn seat-btn disabled bg-danger'>233</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn disabled bg-danger'>234</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn disabled bg-danger'>235</button></div>
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(236)?"bg-primary":""}`} value={236} onClick={seatCountHandler}>236</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(237)?"bg-primary":""}`} value={237} onClick={seatCountHandler}>237</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(238)?"bg-primary":""}`} value={238} onClick={seatCountHandler}>238</button></div>
          <div className="col-1"></div>
          <div className="col-1"></div>
        </div>


        <div className="row">
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(239)?"bg-primary":""}`} value={239} onClick={seatCountHandler}>239</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(240)?"bg-primary":""}`} value={240} onClick={seatCountHandler}>240</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(241)?"bg-primary":""}`} value={241} onClick={seatCountHandler}>241</button></div>
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(242)?"bg-primary":""}`} value={242} onClick={seatCountHandler}>242</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(243)?"bg-primary":""}`} value={243} onClick={seatCountHandler}>243</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(244)?"bg-primary":""}`} value={244} onClick={seatCountHandler}>244</button></div>
          <div className="col-1"></div>
          <div className="col-1"></div>
        </div>


        <div className="row">
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(245)?"bg-primary":""}`} value={245} onClick={seatCountHandler}>245</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(246)?"bg-primary":""}`} value={246} onClick={seatCountHandler}>246</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(247)?"bg-primary":""}`} value={247} onClick={seatCountHandler}>247</button></div>
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(248)?"bg-primary":""}`} value={248} onClick={seatCountHandler}>248</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat.has(249)?"bg-primary":""}`} value={249} onClick={seatCountHandler}>249</button></div>
          <div className="col-1 m-2"><button className='btn seat- disabled bg-danger'>250</button></div>
          <div className="col-1"></div>
          <div className="col-1"></div>
        </div>
      </div>

        {/* static seat number: until add dynamic seat count for each different airlines   ----start */}

      
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
              </div>
              {/*seat label end */}
            </div>


            


          </form>
      {/* form end */}
        </div>
      </div>
    </div>
  )
}

export default Booking