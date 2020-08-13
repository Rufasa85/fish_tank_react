import React from 'react'
import "./style.css"

export default function FishForm(props){
    return(
        <form onSubmit={props.saveFish}>
            <label>Name:</label>
            <input onChange={props.handleChange} value={props.formData.name}name="name" type="text"/>
            <label>Width:</label>
            <input onChange={props.handleChange} value={props.formData.width} name="width" type="number"/>
            <label>Color:</label>
            <input onChange={props.handleChange} value={props.formData.color} name="color" type="color"/>
            <button>Save Fish!</button>
        </form>
    )
}