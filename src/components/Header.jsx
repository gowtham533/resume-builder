import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';



function Header() {

    const projectInfo = "Resume Builder is a web application that allows users to easily create, customize, and download professional resumes. It provides a user-friendly interface where users can input their personal details, educational background, work experience, skills, and other information. The app then automatically formats this data into a clean, well-structured resume template."

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'royalblue'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img width={'50px'} src="./public/transparent-Photoroom.png" alt="logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-dark text-decoration-none fw-bold'>RESUME BUILDER</Link>
          </Typography>
          <Tooltip title={projectInfo}><Button color="inherit text-dark fw-bolder">Login</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header