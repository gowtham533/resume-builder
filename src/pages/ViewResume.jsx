import React, {useEffect,useState} from 'react'
import Preview from "../components/Preview"
import { Link, useParams } from 'react-router-dom';
import { addHistoryAPI, getResume } from '../services/allAPI';
import { FaDownload } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { Button, Tooltip } from '@mui/material';
import Edit from '../components/Edit';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';




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

  const handleDownloadResume = async ()=>{
    // create pdf
    const doc = new jsPDF();
    const preview = document.getElementById("preview")
    // screenshot of preview
    const canvas = await html2canvas(preview,{scale:2})
    // console.log(canvas);
    // convert canvas to image
    const resumeImg = canvas.toDataURL('image/png')
    console.log(resumeImg);
    // add screenshot to pdf
    const pageWidth = doc.internal.pageSize.getWidth()


    const imgWidth = pageWidth-20
    const imgHeight = canvas.height*imgWidth/canvas.width
    doc.addImage(resumeImg,'PNG',0,0,imgWidth,imgHeight)
    // download pdf
    doc.save('resume.pdf')
    
      // local time = new date
  const localTimeDate = new Date()
  // console.log(localTimeDate);
  const timeStamp = `${localTimeDate.toLocaleDateString()}, ${localTimeDate.toLocaleTimeString}`
  // console.log(timeStamp);
  try{
    await addHistoryAPI({timeStamp,resumeImg})
  }catch(err){
    console.log(err);
    
  }
  }



  return (
    <>
  
    <div className="container my-5">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-7 col-12">
              <div className="d-flex justify-content-center align-items-center">
              <Button onClick={handleDownloadResume} color="inherit text-primary fw-bolder"><FaDownload className='fs-5 ms-5 mt-5'/></Button>
              <Edit resumeDetails={resumee} setResumeDetails={setResumee}/>

              <Link to={'/history'}><Button color="inherit text-primary fw-bolder"><IoMdRefresh className='fs-5 ms-5 mt-5'/></Button></Link>
              <Link to={'/resume'}><Button color="inherit text-danger fw-bolder"><IoArrowBack className='fs-5 ms-5 mt-5'/></Button></Link>
              
              
              </div>
                <div id='preview'><Preview resumeDetails={resumee}/></div>
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>
    
    </>
  )
}

export default ViewResume