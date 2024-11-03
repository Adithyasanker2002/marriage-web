import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

import './App.css'
import img1 from "./assets/img1.webp"
import logo from './assets/logo1.png'
import img2 from './assets/oogy1.jpg'
import logo1 from './assets/logo2.png'
import img3 from './assets/transp1.webp'
import img4 from './assets/transp2.webp'
import img5 from './assets/proimg.webp'
import img6 from './assets/tree.webp'
import img7 from './assets/tree1.webp'
import img8 from './assets/cp1.webp'
import img9 from './assets/cp2.webp'
import img10 from './assets/cp3.webp'
import img11 from './assets/yh1.webp'
import img12 from './assets/yh2.webp'
import img13 from './assets/yh3.webp'
import img14 from './assets/yh4.webp'
import img15 from './assets/yh5.webp'
import img16 from './assets/jp1.webp'
import img17 from './assets/jp2.webp'
import img18 from './assets/jp3.webp'
import img19 from './assets/d1.png'
import img20 from './assets/la1.png'


const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
   <>
    
  
        <div id='main'>
         
      <div id='sas' className="col">
    <img width={"100%"} height={"100%"}  id='him' src={img1} alt="" />
      </div>
      <div id='jin' className="col">
        <p id='sasy'>Save The Date</p>
        <p id='jin1'>FOR WEDDING OF </p>
        <p id='jiny'>LAURA & DAVID</p>
        <button id='bd'>22 JULY 2020 | 10AM TO 12PM</button>
        <p id='din'>18, RED ROCKS CHURCH, USA - 141</p>
      </div>
     </div>
    <div id='di'>
      <img width={"80px"} height={"80px"} id='ajax' src={logo} alt="" />
      <p id='if'>Joseph Christ & Alice Jenny</p>
      <p id='else'>ARE GETTING <span id='else1'>MARRIED</span> ON </p>
      <button id='hum'>20TH FEB 2020</button>
    </div>
    <div id='gem'>
      <div className="mol">
        <p id='les'>We Welcome You To <br /> Our Wedding Ceremony</p>
        <img id='yy' width={"250px"} height={"50px"} src={logo1} alt="" />
        <p id='y1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dui <br /> sit amet ligula cursus, eget molestie diam nibh.  Pellentesque vel suscipit <br /> dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ut <br /> vel nesciunt tempore in nam exercitationem unde delectus, quia voluptates, <br /> perspiciatis provident quos quidem labore voluptate, laboriosam <br /> perferendis impedit earum.
        </p>
        <p id='fa'>John Peter & Louis Christ</p>
      </div>
      <div className="mol">
        <img width={"100%"} height={"100%"} src={img2} alt="" />
      </div>
    </div>
    <div id='was'>
      <div id='jas' className="gel">
        <img width={"100%"} height={"100%"} src={img3} alt="" />
        <p id='tekk'>Transportation</p>
        <p id='tekk1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dui sit amet ligula cursus eget molestie. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloremque repellendus aliquam, laudantium deleniti minus, est placeat odit facilis sit quis. Nam quisquam blanditiis laudantium eligendi repudiandae in vitae illum?</p>
        <p id='gift'>READ MORE</p>
      </div>
      <div id='jass' className="gel">
        <img width={"100%"} height={"100%"} src={img4}  alt="" />
        <p id='tekk'>Accomodation</p>
        <p id='tekk1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dui sit amet ligula cursus eget molestie. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloremque repellendus aliquam, laudantium deleniti minus, est placeat odit facilis sit quis. Nam quisquam blanditiis laudantium eligendi repudiandae in vitae illum?</p>
        <p id='gift'>READ MORE</p>
      </div>
    </div>
    <div id='hus'>
      <img width={"100%"} height={"100%"} src={img5} alt="" />
      <p id='rq'>Counting For The Big Day</p>
      <p id='rq1'>23</p>
      <p id='rq2'>22</p>
      <p id='rq3'>27</p>
      <p id='rq4'>Days</p>
      <p id='rq5'>Hours</p>
      <p id='rq6'>Minutes</p>
    </div>
    <div id='tan'>
      <p id='tan1'>About The Couple</p>
      <div id='hrit' className="does">
        <img width={"100%"} height={"100%"} src={img6} alt="" />
      </div>
      <div id='hrit1' className="does">
        <p id='cc'>About Bride</p>
        <p id='cc1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula ligula cursus, eget molestie diam suscipit.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam eligendi magni, quos beatae velit unde id soluta doloribus sequi omnis dicta molestiae voluptatum inventore cupiditate ullam minima blanditiis ipsam a.
        </p>
        <p id='rd'>READ MORE</p>
      </div>
      <div id='hrit2' className="does">
      <img  width={"100%"} height={"100%"} src={img7} alt="" />
      </div>
      <div id='hrit3' className="does">
      <p id='cc'>About Groom</p>
        <p id='cc1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula ligula cursus, eget molestie diam suscipit.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam eligendi magni, quos beatae velit unde id soluta doloribus sequi omnis dicta molestiae voluptatum inventore cupiditate ullam minima blanditiis ipsam a.
        </p>
        <p id='rd'>READ MORE</p>
      </div>
    </div>
    {/* About our Story */}
    <div id='gs'>
      <p id='gun'>About Our Story</p>
      <div id='gs1' className="mi">
        <img width={"100%"} height={"100%"} src={img8} alt="" />
        <p id='jibu'>Our First Meet</p>
        <p id='jibu1'>Lorem ipsum dolor sit amet elit. Duis ligula cursus eget molestie diam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eaque at amet nostrum quae molestiae pariatur ipsa explicabo corporis qui.</p>
        <p id='reddy'>READ MORE</p>
      </div>
      <div id='gs2' className="mi">
      <img width={"100%"} height={"100%"} src={img9} alt="" />
      <p id='jibu'>Our First Date</p>
      <p id='jibu1'>Lorem ipsum dolor sit amet elit. Duis ligula cursus eget molestie diam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eaque at amet nostrum quae molestiae pariatur ipsa explicabo corporis qui.</p>
      <p id='reddy'>READ MORE</p>
      </div>
      <div id='gs3' className="mi">
      <img width={"100%"} height={"100%"} src={img10} alt="" />
      <p id='jibu'>Our Engagement</p>
      <p id='jibu1'>Lorem ipsum dolor sit amet elit. Duis ligula cursus eget molestie diam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eaque at amet nostrum quae molestiae pariatur ipsa explicabo corporis qui.</p>
      <p id='reddy'>READ MORE</p>
      </div>
    </div>
    <div id='joji'>
      <div id='qween1' className="fish">
        <p id='asq'>Our Photo Album</p>
        <p id='asq1'>Lorem ipsum dolor sit amet elit. Duis ligula cursus Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi  eget.</p>
      </div>
      <div  id='qween2' className="fish">
      <img width={"100%"} height={"100%"} src={img11} alt="" />
      </div>
      <div  id='qween3' className="fish">
      <img width={"100%"} height={"100%"} src={img12} alt="" />
      </div>
      <div  id='qween4' className="fish">
      <img width={"100%"} height={"100%"} src={img13} alt="" />
      </div>
      <div  id='qween5' className="fish">
      <img width={"100%"} height={"100%"} src={img14} alt="" />
      </div>
      <div  id='qween6' className="fish">
      <img width={"100%"} height={"100%"} src={img15} alt="" />
      </div>
    </div>
    <div id='vasu'>
      <p id='guno'>Our Wedding Event</p>
      <div id='jachu' className="nunnu">
      <img width={"100%"} height={"100%"} src={img16} alt="" />
      </div>
      <div id='jachu1' className="nunnu">
      <img id='zx' width={"120px"} height={"70px"} src={img19} alt="" />
      <p id='zx1'>Reception</p>
      <p id='zx2'>19th Feb 2020</p>
      <p id='zx3'>6.30PM - 8.00PM</p>
      </div>
      <div id='jachu2'  className="nunnu">
      <img id='zx' width={"120px"} height={"70px"} src={img19} alt="" />
      <p id='zx1'> Ceremony</p>
      <p id='zx2'>20th Feb, 2020</p>
      <p id='zx3'>10.00AM - 11.30AM</p>
        
    
      </div>
      <div id='jachu3' className="nunnu">
      <img width={"100%"} height={"100%"} src={img17} alt="" />
      </div>
      <div id='jachu4'  className="nunnu">
      <img width={"100%"} height={"100%"} src={img18} alt="" />
      </div>
      <div id='jachu5' className="nunnu">
      <img id='zx' width={"120px"} height={"70px"} src={img19} alt="" />
      <p id='zx1'>  Party</p>
      <p id='zx2'>20th Feb, 2020</p>
      <p id='zx3'>5.30PM - 7.00PM</p>
      </div>
    </div>
    <div id='kl'>
    <img id='paf' width={"230px"} height={"80px"} src={img20} alt="" />
    <p id='vb'>WEDDING</p>
    <p id='vb1'>AD67 Superb Avenue, First Street, New York City, NY-110011</p>
  <p id='vb2'>  +3457 2851 692 | example@support.com</p>
  <button id='xc'><i class="fa-brands fa-facebook-f ju"></i></button>
  <button id='xc1'><i class="fa-brands fa-google-plus-g ju"></i></button>
  <button id='xc2'><i class="fa-brands fa-instagram ju"></i></button>
  <button id='xc3'><i class="fa-brands fa-twitter ju"></i></button>
  {/* Modal */}
  <Button className='dorr' style={{backgroundColor:"#E6567A"}}  onClick={handleShow}>
       Connect Us
      </Button>

     
        <Modal  show={show} onHide={handleClose}>
          <Modal.Header style={{backgroundColor:"#E6567A"}}   closeButton>
            <Modal.Title style={{color:"white"}}>Connect With Us</Modal.Title>
          </Modal.Header>
          {/* <Modal.Body></Modal.Body> */}
        <div id='hue' style={{backgroundColor:"#E6567A"}}>
            <input id='dragon' style={{width:"350px" }} type="text" placeholder='Enter Your Name' />
            <input id='dragon1' style={{width:"350px"}} type="email" placeholder='Enter Your E-mail' />
            <input id='dragon2' style={{width:"350px"}} type="tel" placeholder='Enter Your Contact Number' />
        </div>
          <Modal.Footer style={{backgroundColor:"#E6567A"}}  >
            {/* <Button variant="secondary" onClick={handleClose}>
            Close
            </Button> */}
            <Button className='fd'  onClick={handleClose}>
             Submit
            </Button>
          </Modal.Footer>
        </Modal>

  <p id='sport'>© All Rights Reserved|Unsubscribe</p>
    </div>
   </>
    
  )
}

export default App

