import React, { useState, useEffect } from 'react'
import "./style.css"
import Fish from "../Fish"
import API from "../../utils/API"
import FishForm from "../FishForm"
export default function Tank() {
    const [fishes, setFishes] = useState([])
    const [fishFormData, setFishFormData] = useState({
        color: "#bada55",
        name: "",
        width: 0
    })

    useEffect(() => {
        API.getAllFish().then(res => {
            setFishes(res.data);
        })
    }, [])

    const handleFishFormChange = event => {
        const { name, value } = event.target;
        setFishFormData({
            ...fishFormData,
            [name]: value
        })
    }

    const saveFishButton = event => {
        event.preventDefault();
        API.saveFish(fishFormData).then(res => {
            API.getAllFish().then(res => {
                setFishes(res.data);
            })
            setFishFormData({
                color: "#bada55",
                name: "",
                width: 0
            })
        })
    }

    const feedFish = ()=>{
        fishes.forEach(async (fish,index)=>{
            const newWidth = fish.width+10;
            const fishId = fish.id
            await API.makeFishBigger(fishId,newWidth)
            if(!fishes[index+1]){
                API.getAllFish().then(res => {
                    setFishes(res.data);
                })
            }
        })
        
    }

    return (
        <>
            <h1>My fishies, let me show them to you</h1>
            <FishForm formData={fishFormData} handleChange={handleFishFormChange} saveFish={saveFishButton} />
            <button onClick={feedFish}>Feed Fish</button>
            <div className="Tank">
                {fishes.map(fish => <Fish color={fish.color} name={fish.name} width={fish.width} />)}
            </div>
        </>
    )
}
