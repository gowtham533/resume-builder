import React from 'react'
import { IoDocumentAttachSharp } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Resume() {
  return (
    <div className='container-fluid'>
      <h2 className='text-center fw-bold my-5'>Create a Job-Winning Resume in Minutes</h2>
    <div style={{height:'60vh'}} className="row justify-content-center align-items-center">
    <div className="col-md-1"></div>
    <div className="col-md-4 border rounded p-5 text-center">
    <IoDocumentAttachSharp className='text-danger fs-2 mb-3'/>
    <h1>Add Your Information</h1>
    <p>Add pre-written examples to each section</p>
    <h4>Step 1</h4>
    </div>
    <div className="col-md-2"></div>
    <div className="col-md-4 border rounded p-5 text-center">
    <FaFileDownload className='text-danger fs-2 mb-3'/>
    <h1>Download Your Resume</h1>
    <p>Download and Start Appling</p>
    <h4>Step 2</h4>
    </div>
    <div className="col-md-1"></div>
    </div>
    <div className="text-center mb-5">
      <Link to={'/userform'} className='btn text-white' style={{backgroundColor:'black'}}>LET'S START</Link>
    </div>
    </div>
  )
}

export default Resume