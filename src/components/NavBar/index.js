import React from 'react'
import LoginForm from '../LoginForm'
import "./style.css";

export default function NavBar(props) {
    return (
        <div className="NavBar">
           <a href="#">Home</a> 
    {props.currentUser?<span>Welcome, {props.currentUser.name}</span>:<LoginForm handleSubmit = {props.loginSubmit} handleChange={props.inputChange} formData={props.loginFormData}/>}
        </div>
    )
}
