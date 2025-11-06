import React, {useEffect,useState} from 'react'
import Preview from "../components/Preview"
import { Link, useParams } from 'react-router-dom';
import { getResume } from '../services/allAPI';
import { FaDownload } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { Button, Tooltip } from '@mui/material';
import Edit from '../components/Edit';





function ViewResume() {
  const {id} = useParams()
  console.log(id);
  const [resumee,setResumee] = useState({})

  useEffect(()=>{
    getResumeDetails()
  },[])

  const getResumeDetails = async ()=>{
    const result = await getResume(id)
    console.log(result);
    if(result.status==200){
      setResumee(result.data)
    }
    
  }



  
  return (
    <>
   
    <div className="container my-5">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 col-12">
              <div className="d-flex justify-content-center align-items-center">
              <Button color="inherit text-primary fw-bolder"><FaDownload className='fs-5 ms-5 mt-5'/></Button>
              <Edit resumeDetails={resumee} setResumeDetails={setResumee}/>

              <Link to={'/history'}><Button color="inherit text-primary fw-bolder"><IoMdRefresh className='fs-5 ms-5 mt-5'/></Button></Link>
              <Link to={'/resume'}><Button color="inherit text-danger fw-bolder"><IoArrowBack className='fs-5 ms-5 mt-5'/></Button>
</Link>
              
              
              </div>
                <Preview resumeDetails={resumee}/>
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>
    
    </>
  )
}

export default ViewResume