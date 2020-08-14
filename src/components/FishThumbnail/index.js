import React from 'react'
import "./style.css"

export default function FishThumbnail(props) {
    const height = props.width/16;
    const width = props.width/4;
    const styles={
        name:{
            fontSize:height/2,
            color:props.color
        },
        fish:{
            width:`${width}px`,
            height:`${height}px`
        },
        body:{
            backgroundColor:props.color,
            width:`${width*0.7}px`,
            height:`${height}px`
        },
        tail:{
            background:`linear-gradient(45deg,transparent 0%, transparent 50%, ${props.color} 50%,${props.color} 100%)`,
            width:`${height}px`,
            height:`${height}px`
        }
    }
    return (
        <div className = "Fish" style={styles.fish}>
                <div className="tail" style={styles.tail}></div>
    <div className="body" style={styles.body}><span className="name" style={styles.name}>{props.name}</span></div>
        </div>
    )
}
