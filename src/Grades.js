import React from 'react'
import {  useNavigate } from 'react-router-dom';

function Grades() {
  const navigate = useNavigate();
  return (
    <div><center><h1>Grades page</h1>
    <button style={{backgroundColor:'#e6787c', color:"white", padding:"1%", borderRadius:"5px", border:"none", fontSize:"20px"}} onClick={() =>{
        navigate(-1);
      }}>GoBack</button></center></div>
  )
}

export default Grades