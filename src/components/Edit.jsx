
import React, { useState,useRef } from 'react'
import { FaRegEdit } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { HiXMark } from "react-icons/hi2";
import { updateResume } from "../services/allAPI";
import { resume } from 'react-dom/server';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  maxHeight:'80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Edit({resumeDetails,setResumeDetails}) {

    const [open,setOpen] = useState(false)
    const skillRef = useRef()

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

        const addSkill = (skill)=>{
  if(resumeDetails.userSkill.includes(skill)){
    alert("The given skill is already added...Add another")
  }else{
    setResumeDetails({...resumeDetails,userSkill:[...resumeDetails.userSkill,skill]})
    // to clear text box
    skillRef.current.value = ""
  }
}

const handleResusmeUpdate = async ()=>{
  const {id,username,jobtitle,location} = resumeDetails
  if(!username && !jobtitle && !location){
    alert(please)
  }else{
    console.log("Api call");
    try{
      const result = await updateResume(id,resumeDetails)
      console.log(result);
      if(result.status==200){
        alert("Resume updated successfully")
        handleClose()
      }
    }catch(err){
      console.log(err);
    }
  }
}

const removeSkill = (skill)=>{
  setResumeDetails({...resumeDetails,userSkill:resumeDetails.userSkill.filter(item=>item!=skill)})
} 

  return (
    <div>
    <Button onClick={handleOpen} color="inherit text-danger fw-bolder"><FaRegEdit className='fs-5 ms-5 mt-5'/></Button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            {/* personal details */}
                        <div>
                            <h3>Personal Details</h3>
                            <div className="row p-3">
                            <TextField value={resumeDetails.username} onChange={e=>setResumeDetails({...resumeDetails,username:e.target.value})} id="standard-basic-name" label="Full Name" variant="standard" />
                            <TextField value={resumeDetails.jobtitle} onChange={e=>setResumeDetails({...resumeDetails,jobtitle:e.target.value})} id="standard-basic-job" label="Job Title" variant="standard" />
                            <TextField value={resumeDetails.location} onChange={e=>setResumeDetails({...resumeDetails,location:e.target.value})} id="standard-basic-loc" label="Location" variant="standard" />
                            </div>
                        </div>
            {/* contact details */}
            <div>
                            <h3>Contact Details</h3>
                            <div className="row p-3">
                            <TextField value={resumeDetails.email} onChange={e=>setResumeDetails({...resumeDetails,email:e.target.value})} id="standard-basic-mail" label="E mail" variant="standard" />
                            <TextField value={resumeDetails.mobile} onChange={e=>setResumeDetails({...resumeDetails,mobile:e.target.value})} id="standard-basic-no" label="Phone Number" variant="standard" />
                            <TextField value={resumeDetails.github} onChange={e=>setResumeDetails({...resumeDetails,github:e.target.value})} id="standard-basic-git" label="Github Profile Link" variant="standard" />
                            <TextField value={resumeDetails.linkedin} onChange={e=>setResumeDetails({...resumeDetails,linkedin:e.target.value})} id="standard-basic-linked" label="Linkedin Profile Link" variant="standard" />
                            <TextField value={resumeDetails.portfolio} onChange={e=>setResumeDetails({...resumeDetails,portfolio:e.target.value})} id="standard-basic-portfolio" label="Portfolio Link" variant="standard" />
                            </div>
                        </div>
            {/* educational details */}
            <div>
                <h3>Educational Details</h3>
                <div className="row p-3">
                <TextField value={resumeDetails.course} onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})} id="standard-basic-course" label="Course Name" variant="standard" />
                <TextField value={resumeDetails.college} onChange={e=>setResumeDetails({...resumeDetails,college:e.target.value})} id="standard-basic-college" label="College Name" variant="standard" />
                <TextField value={resumeDetails.university} onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})} id="standard-basic-university" label="University" variant="standard" />
                <TextField value={resumeDetails.passoutYear} onChange={e=>setResumeDetails({...resumeDetails,passoutYear:e.target.value})} id="standard-basic-passout" label="Year of Passout" variant="standard" />
                </div>
            </div>
            {/* professional details */}
            <div>
                <h3>Professional Details</h3>
                <div className="row p-3">
                <TextField value={resumeDetails.job} onChange={e=>setResumeDetails({...resumeDetails,job:e.target.value})} id="standard-basic-intership" label="Job or Internship" variant="standard" />
                <TextField value={resumeDetails.company} onChange={e=>setResumeDetails({...resumeDetails,company:e.target.value})} id="standard-basic-company" label="Company Name" variant="standard" />
                <TextField value={resumeDetails.comLocation} onChange={e=>setResumeDetails({...resumeDetails,comLocation:e.target.value})} id="standard-basic-cLocation" label="Company Location" variant="standard" />
                <TextField value={resumeDetails.duration} onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})} id="standard-basic-duration" label="Duration" variant="standard" />
                </div>
            </div>
            {/* skills */}
            <div>
                <h3>Skills </h3>
                <div className='d-flex align-items-center justify-content-center p-3 w-100'>
                <input ref={skillRef} placeholder='Add Your Skills' className='w-100 p-2' type="text" />                 
                <Button onClick={()=>addSkill(skillRef.current.value)} variant='text'>ADD</Button>
                </div>
                <h4>Added Skills</h4>
                <div className='d-flex flex-wrap justify-content-between my-3'>
                  {
                    resumeDetails.userSkill?.length>0?
                    resumeDetails.userSkill?.map((skill,index)=>(
                  <Button variant='contained' className='m-1'>{skill}<HiXMark onClick={()=>removeSkill(skill)} className='m-2' /></Button>
                    ))
                    :
                    <p className='fw-bolder'>No skills are added yet</p>
                  }
                </div>
            </div>
            {/* summary */}
            <div>
                <h3>Summary </h3>
                <div className='p-3 row'>
                <TextField onChange={e=>setResumeDetails({...resumeDetails,summary:e.target.value})} id="standard-basic-summary" label="Add a Short Summary of Yourself" variant="standard" multiline rows={3} defaultValue={'Enthusiastic and detail-oriented MERN Stack Developer with hands-on experience in building dynamic and responsive web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in developing RESTful APIs, managing databases, and creating interactive front-end interfaces. Strong understanding of JavaScript, ES6, and modern web development practices. Passionate about writing clean, efficient code and continuously learning new technologies to deliver high-quality solutions.'} />
                </div>
            </div>
            <div className="my-5">
                <button onClick={handleResusmeUpdate} className='btn btn-warning text-light'>update</button>
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit