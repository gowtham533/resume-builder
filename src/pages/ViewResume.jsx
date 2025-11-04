import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Preview from "../components/Preview"


function ViewResume() {
  return (
    <>
   
    <div className="container my-5">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <Preview/>
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>
    
    </>
  )
}

export default ViewResume