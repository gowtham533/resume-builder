
import { Divider,Button } from '@mui/material'
import React from 'react'


function Preview() {
  return (
    <div style={{margin:'70px'}} className='shadow rounded p-4 w-100 text-center'>
      <h3>Name</h3>
      <h5>Job title</h5>
      <h6><span className='mx-2'>Location</span>|<span className='mx-2'>E Mail</span>|<span className='mx-2'>Mobile</span></h6>
      <p className='my-3'>
      <a href="" target='_blank' className='mx-1'>GITHUB</a>|
      <a href="" target='_blank' className='mx-1'>LINKEDIN</a>|
      <a href="" target='_blank' className='mx-1'>PORTFOLIO</a>
      </p>
      <Divider sx={{fontSize:'25px'}}>Summary</Divider>
      <p style={{textAlign:'justify'}}>Enthusiastic and detail-oriented MERN Stack Developer with hands-on experience in building dynamic and responsive web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in developing RESTful APIs, managing databases, and creating interactive front-end interfaces. Strong understanding of JavaScript, ES6, and modern web development practices. Passionate about writing clean, efficient code and continuously learning new technologies to deliver high-quality solutions.</p>
      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Education</Divider>
      <h5>Course Name</h5>
      <p><span className='mx-2'>College</span>|<span className='mx-2'>University</span>|<span className='mx-2'>Passout Year</span></p>
      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Professional Experience</Divider>
      <h5>Job / Internship</h5>
      <p><span className='mx-2'>Company Name</span>|<span className='mx-2'>Company Location</span>|<span className='mx-2'>Duration</span></p>
      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Professional Experience</Divider>
      <div className='d-flex flex-wrap justify-content-between my-3'>
      <Button variant='contained' className='m-1'>REACT</Button>
      <Button variant='contained' className='m-1'>NODE</Button>
      <Button variant='contained' className='m-1'>ANGULAR</Button>
      </div>
    </div>
  )
}

export default Preview