
import { Divider,Button } from '@mui/material'
import React from 'react'


function Preview({resumeDetails}) {
  return (
    <div style={{margin:'70px'}} className='shadow rounded p-4 w-100 text-center'>
      <h3>{resumeDetails?.username}</h3>
      <h5>{resumeDetails?.jobtitle}</h5>
      <h6><span className='mx-2'>{resumeDetails?.location}</span>|<span className='mx-2'>{resumeDetails?.email}</span>|<span className='mx-2'>{resumeDetails?.mobile}</span></h6>
      <p className='my-3'>
      <a href={resumeDetails?.github} target='_blank' className='mx-1'>GITHUB</a>|
      <a href={resumeDetails?.linkedin} target='_blank' className='mx-1'>LINKEDIN</a>|
      <a href={resumeDetails?.portfolio} target='_blank' className='mx-1'>PORTFOLIO</a>
      </p>
      <Divider sx={{fontSize:'25px'}}>Summary</Divider>
      <p style={{textAlign:'justify'}}>{resumeDetails?.summary}</p>
      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Education</Divider>
      <h5>{resumeDetails?.course}</h5>
      <p><span className='mx-2'>{resumeDetails?.college}</span>|<span className='mx-2'>{resumeDetails?.university}</span>|<span className='mx-2'>{resumeDetails?.passoutYear}</span></p>
      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Professional Experience</Divider>
      <h5>{resumeDetails?.job}</h5>
      <p><span className='mx-2'>{resumeDetails?.company}</span>|<span className='mx-2'>{resumeDetails?.comLocation}</span>|<span className='mx-2'>{resumeDetails?.duration}</span></p>
      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Skills</Divider>
      <div className='d-flex flex-wrap justify-content-between my-3'>
      {
        resumeDetails?.userSkill?.map((item,index)=>(
          <Button key={index} variant='contained' className='m-1'>{item}</Button>
        ))
      }
      </div>
    </div>
  )
}

export default Preview