import React from 'react'
import LoginForm from '../LoginForm'
import "./style.css";
import {Link} from "react-router-dom"

export default function NavBar(props) {
    return (
        <div className="NavBar">
           <Link to="/">Home</Link> 
    {props.currentUser?<span>Welcome, {props.currentUser.name}</span>:<LoginForm handleSubmit = {props.loginSubmit} handleChange={props.inputChange} formData={props.loginFormData}/>}
        </div>
    )
}
