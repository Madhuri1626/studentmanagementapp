import React from 'react';
import './Dashboard.css'

function Dashboard() {
  return (
    <>
      <center>
        <h1>DashBoard Page</h1>
      </center>
      <div className='con'>
      <div className='container'>
        <h1>
          <center>
            No.of Students : 5
          </center>
        </h1>
      </div>
      <div className='container'>
        <h1>
          <center>
            No.of Grades : 6
          </center>
        </h1>
      </div>
      <div className='container'>
        <h1>
          <center>
            No.of Courses : 7
          </center>
        </h1>
      </div>
      </div>
    </>
  )
}

export default Dashboard