import React from 'react'
import "./style.css"
import {Link} from "react-router-dom"

export default function FishCard(props) {
    const style = {
        backgroundColor: props.color
    }
    return (
        <Link to={`/fish/${props.id}`}>
            <div className="FishCard" style={style}>
                <h3>name: {props.name}</h3>
                <h3>width: {props.width}</h3>
                <h3>TankId:{props.tankId}</h3>
            </div>
        </Link>
    )
}
