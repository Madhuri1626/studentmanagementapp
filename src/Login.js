import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './login.css'


function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate= useNavigate();
    const onSubmit = (formdata) => {
        console.log(formdata);
        const username = localStorage.getItem("Name")
        const password = localStorage.getItem("Password")
        if ((username === formdata.username && password === formdata.password)) {
            navigate('/');
        }
        else {
            alert("Invalid Credentials")
        }
    }
    return (
        <div> 
            <center><h1>Login Page</h1></center>
            <div className='cont'>
            <center>
                <form onSubmit={handleSubmit(onSubmit)}> 
                    <div>
                        <label>UserName : </label>
                        <input type="text" placeholder='Username' {...register('username', { required: true, minLength: 5, maxLength: 20, pattern: /^[A-Za-z]/ })} /> <br />
                        <error style={{ color: 'red' }}>{errors.username?.type === 'required' && 'Enter the username'}</error>
                        <error style={{ color: 'red' }}>{errors.username?.type === 'minLength' && 'Minimum Length of username should be greater than 5'}</error>
                        <error style={{ color: 'red' }}>{errors.username?.type === 'maxLength' && 'Maximum Length of Usernname should be 20 characters'}</error>
                        <error style={{ color: 'red' }}>{errors.username?.type === 'pattern' && 'Name is required'}</error>
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" placeholder='password' {...register('password', {required:true, minLength:5, maxLength: 20, pattern: /^[A-Za-z]/ })} /> <br />
                        <error style={{ color: 'red' }}>{errors.password?.type === 'required' && 'Enter the Password'}</error>
                        <error style={{ color: 'red' }}>{errors.password?.type === 'minLength' && 'Minimum Length of password should be greater than 5'}</error>
                        <error style={{ color: 'red' }}>{errors.password?.type === 'maxLength' && 'Maximum Length of password should be 20 characters'}</error>
                        <error style={{ color: 'red' }}>{errors.password?.type === 'pattern' && 'Name is required'}</error>
                    </div>
                    <div><input type="submit" value="Login" /></div>
                </form> <br /> <br />
                <button style={{backgroundColor:'#e6787c', color:"white", padding:"1%", borderRadius:"5px", border:"none", fontSize:"20px"}} onClick={() =>{
        navigate(-1);
      }}>GoBack</button>
            </center>
            </div>
        </div>

    )
}

export default Login