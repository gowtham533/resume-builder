import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { HiXMark } from "react-icons/hi2";
import { addResume } from '../services/allAPI';

const steps = ['Basic Information', 'Contact Details', 'Educational Details', 'Work Experience', 'Skills & Certifications', 'Review & Submit'];

function UserInput({resumeDetails,setResumeDetails}) {
  const skillSuggestionArray = ['NODE JS','MONGODB','EXPRESS JS','TAILWIND CSS','REACT','ANGULAR','COMMUNICATION','LEADERSHIP','COACHING','BOOTSTRAP','GIT','POWER BI','NEXT JS']
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  

  // reference to skill input tag
  const skillRef = React.useRef()


  console.log(resumeDetails);
  
  

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

const addSkill = (skill)=>{
  if(resumeDetails.userSkill.includes(skill)){
    alert("The given skill is already added...Add another")
  }else{
    setResumeDetails({...resumeDetails,userSkill:[...resumeDetails.userSkill,skill]})
    // to clear text box
    skillRef.current.value = ""
  }
}

const removeSkill = (skill)=>{
  setResumeDetails({...resumeDetails,userSkill:resumeDetails.userSkill.filter(item=>item!=skill)})
} 

const renderSteps = (stepCount)=>{
    switch(stepCount){
        case 0 : return(
            <div>
                <h3>Personal Details</h3>
                <div className="row p-3">
                <TextField value={resumeDetails.username} onChange={e=>setResumeDetails({...resumeDetails,username:e.target.value})} id="standard-basic-name" label="Full Name" variant="standard" />
                <TextField value={resumeDetails.jobtitle} onChange={e=>setResumeDetails({...resumeDetails,jobtitle:e.target.value})} id="standard-basic-job" label="Job Title" variant="standard" />
                <TextField value={resumeDetails.location} onChange={e=>setResumeDetails({...resumeDetails,location:e.target.value})} id="standard-basic-loc" label="Location" variant="standard" />
                </div>
            </div>
        )
        case 1 : return(
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
        )
        case 2 : return(
            <div>
                <h3>Educational Details</h3>
                <div className="row p-3">
                <TextField value={resumeDetails.course} onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})} id="standard-basic-course" label="Course Name" variant="standard" />
                <TextField value={resumeDetails.college} onChange={e=>setResumeDetails({...resumeDetails,college:e.target.value})} id="standard-basic-college" label="College Name" variant="standard" />
                <TextField value={resumeDetails.university} onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})} id="standard-basic-university" label="University" variant="standard" />
                <TextField value={resumeDetails.passoutYear} onChange={e=>setResumeDetails({...resumeDetails,passoutYear:e.target.value})} id="standard-basic-passout" label="Year of Passout" variant="standard" />
                </div>
            </div>
        )
        case 3 : return(
            <div>
                <h3>Professional Details</h3>
                <div className="row p-3">
                <TextField value={resumeDetails.job} onChange={e=>setResumeDetails({...resumeDetails,job:e.target.value})} id="standard-basic-intership" label="Job or Internship" variant="standard" />
                <TextField value={resumeDetails.company} onChange={e=>setResumeDetails({...resumeDetails,company:e.target.value})} id="standard-basic-company" label="Company Name" variant="standard" />
                <TextField value={resumeDetails.comLocation} onChange={e=>setResumeDetails({...resumeDetails,comLocation:e.target.value})} id="standard-basic-cLocation" label="Company Location" variant="standard" />
                <TextField value={resumeDetails.duration} onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})} id="standard-basic-duration" label="Duration" variant="standard" />
                </div>
            </div>
        )
        case 4 : return(
            <div>
                <h3>Skills </h3>
                <div className='d-flex align-items-center justify-content-center p-3 w-100'>
                <input ref={skillRef} placeholder='Add Your Skills' className='w-100 p-2' type="text" />                 
                <Button onClick={()=>addSkill(skillRef.current.value)} variant='text'>ADD</Button>
                </div>
                <h4>Suggestions</h4>
                <div className='d-flex flex-wrap justify-content-between my-3'>
                  {
                    skillSuggestionArray.map((item,index)=>(
                      <Button onClick={()=>addSkill(item)} key={index} variant='outlined' className='m-1'>{item}</Button>
                    ))
                  }
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
        )
        case 5 : return(
            <div>
                <h3>Summary </h3>
                <div className='p-3 row'>
                <TextField onChange={e=>setResumeDetails({...resumeDetails,summary:e.target.value})} id="standard-basic-summary" label="Add a Short Summary of Yourself" variant="standard" multiline rows={3} defaultValue={'Enthusiastic and detail-oriented MERN Stack Developer with hands-on experience in building dynamic and responsive web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in developing RESTful APIs, managing databases, and creating interactive front-end interfaces. Strong understanding of JavaScript, ES6, and modern web development practices. Passionate about writing clean, efficient code and continuously learning new technologies to deliver high-quality solutions.'} />
                </div>
            </div>
        )
        default : return null
    }
  }

const handleAddResume = async ()=>{
  const {username,jobtitle,location} = resumeDetails
    if(!username && !jobtitle && !location){
      alert("Please fill the form completely")
    }else{
      // api
      console.log("Api Call");
      // success redirect view page
      
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* render contents */}
          <Box>
            {renderSteps(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            {activeStep === steps.length - 1 ? 
            <Button onClick={handleAddResume}>Finish</Button>
             : 
             <Button onClick={handleNext}>Next</Button>}
          
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default UserInput