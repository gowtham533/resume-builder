import { Box,Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdDeleteOutline } from "react-icons/md";

function History() {
  return (
    <div>
      <h1 className="text-center my-5">Downloaded Resume History</h1>
      <Link to={'/resume'} className='float-end me-5' style={{marginTop:'-85px'}}>Back</Link>
       <Box component="section" className='container-fluid'>
      <div className="row">
        <div className="col-md-4">
        <Paper elevation={3} sx={{my:5,p:5,textAlign:'center'}}>
          <div className="d-flex align-items-center justify-content-center">
            <h6>Review at : 12-10-2025 sunday, 9:28 am</h6>
            <button className='btn text-danger fs-4 mb-2'><MdDeleteOutline /></button>
          </div>
          <div className="border rounded p-3 align-items-center">
            <img style={{width:'350px', height:'400px'}} src="./public/resume1.jpeg" alt="" />
          </div>
        </Paper>

        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
      </div>
    </Box>
    </div>
  )
}

export default History