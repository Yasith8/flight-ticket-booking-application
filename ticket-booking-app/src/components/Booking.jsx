import React, { useEffect, useRef, useState } from 'react'
import Sidebar from './Sidebar'

import '../components/booking.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Booking() {

 
  const [select,setSelect]=useState(0);

  const [seatCount,setSeatCount]=useState(select);
  const [toggleSeat,setToggleSeat]=useState(false);

  const ticketCountHandler=(e)=>{
    setSelect(e.target.value);
    console.log(e.target.value);
    setSeatCount(e.target.value)
  }

  const ticketCount=Array.from({ length: 10 }, (_, index) => index + 1);
  
  


  const seatCountHandler=(e)=>{
    e.preventDefault();



    //console.log(seatCount)
    
    setToggleSeat(!toggleSeat); 
    
    if(!toggleSeat){
      setSeatCount(prev=>prev-1)
    }else{
      setSeatCount(prev=>prev+1)
    }
 
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
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat?"bg-success":""}`} value={101} onClick={seatCountHandler}>101</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat?"bg-success":""}`} value={102} onClick={seatCountHandler}>102</button></div>
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat?"bg-success":""}`} value={103} onClick={seatCountHandler}>103</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat?"bg-success":""}`} value={104} onClick={seatCountHandler}>104</button></div>
          <div className="col-1 m-2"><button className={`btn seat-btn ${toggleSeat?"bg-success":""}`} value={105} onClick={seatCountHandler}>105</button></div>
          <div className="col-1"></div>
          <div className="col-1"></div>
        </div>

        <div className="row">
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>106</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>107</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>108</button></div>
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>109</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>110</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>111</button></div>
          <div className="col-1"></div>
          <div className="col-1"></div>
        </div>

        <div className="row">
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>112</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>113</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>114</button></div>
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>115</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn disabled bg-danger'>116</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>117</button></div>
          <div className="col-1"></div>
          <div className="col-1"></div>
        </div>

        <div className="row">
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>118</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn disabled bg-danger'>119</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>120</button></div>
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>121</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>122</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>123</button></div>
          <div className="col-1"></div>
          <div className="col-1"></div>
        </div>



        <div className="row">
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>209</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>210</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>211</button></div>
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>212</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>213</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>214</button></div>
          <div className="col-1"></div>
          <div className="col-1"></div>
        </div>


        <div className="row">
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>215</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>216</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>217</button></div>
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>218</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>219</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>220</button></div>
          <div className="col-1"></div>
          <div className="col-1"></div>
        </div>


        <div className="row">
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>221</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn disabled bg-danger'>222</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn disabled bg-danger'>223</button></div>
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>224</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>225</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>226</button></div>
          <div className="col-1"></div>
          <div className="col-1"></div>
        </div>


        <div className="row">
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>227</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>228</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>229</button></div>
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>230</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>231</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>232</button></div>
          <div className="col-1"></div>
          <div className="col-1"></div>
        </div>


        <div className="row">
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className='btn seat-btn disabled bg-danger'>233</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn disabled bg-danger'>234</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn disabled bg-danger'>235</button></div>
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>236</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>237</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>238</button></div>
          <div className="col-1"></div>
          <div className="col-1"></div>
        </div>


        <div className="row">
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>239</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>240</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>241</button></div>
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>242</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>243</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>244</button></div>
          <div className="col-1"></div>
          <div className="col-1"></div>
        </div>


        <div className="row">
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>245</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>246</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>247</button></div>
          <div className="col-1"></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>248</button></div>
          <div className="col-1 m-2"><button className='btn seat-btn'>249</button></div>
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