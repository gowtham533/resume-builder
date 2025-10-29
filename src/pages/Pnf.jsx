import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



function Pnf() {
  return (
    <div style={{height:'70vh'}} className='d-flex flex-column align-items-center justify-content-center'>
      
      <h1 style={{fontSize:'130px'}}>4<span className='text-danger'>0</span>4</h1>
      <h5>Page Not Found</h5>
      <Link to={'/'} className='btn text-white' style={{backgroundColor:'black'}}>Go to Home</Link>
    </div>
  )
}

export default Pnf