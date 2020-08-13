import React from 'react'

export default function LoginForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>email:</label>
            <input type="text" name="email" onChange={props.handleChange}value={props.formData.email}/>
            <label>password:</label>
            <input type="password" name="password" onChange={props.handleChange}value={props.formData.password}/>
            <button>login</button>
        </form>
    )
}
