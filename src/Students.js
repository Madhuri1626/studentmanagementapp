import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';

const Students = () => {
    const navigate = useNavigate();
    const changeStyle =({isActive})=>{
        return{
          color:isActive?'#e6787c':'#55c5ac',
          fontWeight:'bolder',
          textDecoration:'none,'
        }
      }
    return (
        <div>
          <center>
            <h1> Students page</h1>
            <NavLink to="s1" style={changeStyle}> 1258 </NavLink>
            <br/>
            <NavLink to="s2" style={changeStyle}> 1262 </NavLink>
            <br/>
            <NavLink to="s3" style={changeStyle}> 1255 </NavLink>
            <br/>
            <NavLink to="s4" style={changeStyle}> 1259 </NavLink>
            <br/>
            <NavLink to="s4" style={changeStyle}> 1249 </NavLink>
            <br/>
            <Outlet/>
            <br/>
            <button style={{backgroundColor:'#e6787c', color:"white", padding:"1%", borderRadius:"5px", border:"none", fontSize:"20px"}} onClick={() =>{
        navigate(-1);
      }}>GoBack</button>
        </center>
        </div>
    );
};

export default Students;