import React from 'react'
import UserInput from '../components/UserInput'
import Preview from '../components/Preview'

function UserForm() {
  return (
    <div className='container'>
      <div className="row p-5">
        <div className="col-lg-6">
          <UserInput/>
        </div>
        <div className="col-lg-6">
          <Preview/>
        </div>
      </div>
    </div>
  )
}

export default UserForm