// rfce
import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      {/* landing part */}
      <section style={{width:'100%',height:'100vh',backgroundImage:"url('public/top-view-desk-concept-with-copy-space.jpg')",backgroundAttachment:'fixed',backgroundPosition:'top',backgroundSize:'cover'}} className='container-fluid row align-items-center'>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 shadow border py-5 rounded mt-5 text-center" style={{backgroundColor:'rgba(255,255,255,0.8)'}}>
            <h3>Designed to get hired. <br />
              Your skills, your story, your next job - All in one</h3>
            <Link to={'/resume'} className='btn text-white' style={{backgroundColor:'black'}}>Make your Resume</Link>
          </div>
          <div className="col-md-4"></div>
        </div>
      </section>
    {/* tools section */}
    <section className='my-5'>
    <h1 className='text-center'>TOOLS</h1>
    <div className="container row align-items-center">
      <div className="col-md-6 text-center">
        <div className='my-3'>
        <h4>Resume</h4>
        <p>Create unlimited new resume and easily edit them afterwards.</p>
        </div>
        <div className='my-3'>
        <h4>Cover Letter</h4>
        <p>Easily write professional cover letters.</p>
        </div>
        <div className='my-3'>
        <h4>Jobs</h4>
        <p>Automatically receive new and relevant job postings.</p>
        </div>
        <div className='my-3'>
        <h4>Applications</h4>
        <p>Effortlessely manage and track your job application in an organized manner.</p>
        </div>
      </div>
      <div className="col-md-6">
        <img className='img-fluid' src="./public/photoroom girl holding.png" alt="" />
      </div>
    </div>
    </section>
    {/* image */}
    <section style={{height:'400px',width:'100%',backgroundImage:'url("public/Team Collaboration Meeting.jpg")',backgroundAttachment:'fixed',backgroundPosition:'top',backgroundSize:'cover'}}>
    </section>
    {/* testimony */}
    <section>
      <h1 className='text-center my-5'>TESTIMONY</h1>
    <div className="container row align-items-center">
      <div className="col-md-5 ms-5">
        <h4 className='fst-italic fw-bold'>Trusted by professionals worldwide</h4>
      
      <p className='fs-5' style={{textAlign:'justify'}}>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>

      <p  className='fs-5' style={{textAlign:'justify'}}>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>

      <p  className='fs-5' style={{textAlign:'justify'}}>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-5 col-12 my-5 ms-5">
        <div className="row">
          <div className="col-3">
            <img className='w-100' src="./public/person 1.jpeg" alt="person" />
          </div>
          <div className="col-3">
            <img className='w-100' src="./public/person2.jpeg" alt="person" />
          </div>
          <div className="col-3">
            <img className='w-100' src="./public/person 3.jpeg" alt="person" />
          </div>
          <div className="col-3">
            <img className='w-100' src="./public/person 4.jpeg" alt="person" />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-3">
            <img className='w-100' src="./public/person 5.jpeg" alt="person" />
          </div>
          <div className="col-3">
            <img className='w-100' src="./public/person 6.jpeg" alt="person" />
          </div>
          <div className="col-3">
            <img className='w-100' src="./public/person 7.jpeg" alt="person" />
          </div>
          <div className="col-3">
            <img className='w-100' src="./public/person 8.jpeg" alt="person" />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <img className='w-100' src="./public/person 9.jpeg" alt="person" />
          </div>
          <div className="col-3">
            <img className='w-100' src="./public/person 10.jpeg" alt="person" />
          </div>
          <div className="col-3">
            <img className='w-100' src="./public/person 11.jpeg" alt="person" />
          </div>
          <div className="col-3">
            <img className='w-100' src="./public/person 12.jpeg" alt="person" />
          </div>
        </div>
      </div>
    </div>
    </section>
    </div>
  )
}

export default LandingPage