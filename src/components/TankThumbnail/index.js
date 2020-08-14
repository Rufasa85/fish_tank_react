import React from 'react'
import "./style.css"
import {Link} from "react-router-dom"
import FishThumbnail from "../FishThumbnail"
export default function TankThumbnail(props) {
    return (
        <Link to={`/tank/${props.id}`}>
        <div className="TankThumbnail">
            <h3>{props.name}</h3>
            {props.fish.map(fish=><FishThumbnail width={fish.width} color={fish.color} key={fish.id}/>)}
        </div>
        </Link>
    )
}
