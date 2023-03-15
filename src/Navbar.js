import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  const savedata = () =>{
    localStorage.setItem("Name",  "Madhuri")
    localStorage.setItem("Password", "madhuri")
  }
    const changestyle= ({isActive}) => {
        return{
          color: isActive ? '#e6787c' : 'white',
          backgroundColor: isActive ? 'white' : '#e6787c',
          padding: '1%',
          borderRadius: '5px',
          fontSize: '20px',
          textDecoration:'none'
        }
    }
  return (
    <div>
        <div className='nav' style={{backgroundColor:"#e6787c", height: '45px', color: 'white'}}>
        <NavLink to="/" style={changestyle} className="navitem">Dash Board</NavLink>
        <NavLink to="grades" style={changestyle} className="navitem">Grades</NavLink>
        <NavLink to="courses" style={changestyle} className="navitem">Courses</NavLink>
        <NavLink to="students" style={changestyle} className="navitem">Students</NavLink>
        <NavLink to="login" style={changestyle} className="navitem"><button className='but' onClick={savedata}>Login</button></NavLink>
        </div>
    </div>
  )
}

export default Navbar