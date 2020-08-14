import React, { useState, useEffect } from 'react'
import {useParams} from "react-router-dom"
import "./style.css"
import Fish from "../../components/Fish"
import API from "../../utils/API"
import FishForm from "../../components/FishForm"
export default function Tank(props) {
    const [fishes, setFishes] = useState([])
    const [showFishForm, setShowFishForm] = useState(false)
    const [tankName, setTankName] = useState("")
    const [tankUserId, setTankUserId] = useState(0)
    const [isEditable,setIsEditable]= useState(false);
    const [fishFormData, setFishFormData] = useState({
        color: "#bada55",
        name: "",
        width: 0
    })

    const params = useParams();

    useEffect(() => {
        API.getThisTankFish(params.id).then(res => {
            console.log(res.data);
            setFishes(res.data.Fishes);
            setTankName(res.data.name);
            setTankUserId(res.data.UserId);
        })
    }, [])

    useEffect(()=>{
        if(props.currentUser&&tankUserId===props.currentUser.id){
            setIsEditable(true);
        } else {
            setIsEditable(false)
        }
    },[props.currentUser, tankUserId])

    const handleFishFormChange = event => {
        const { name, value } = event.target;
        setFishFormData({
            ...fishFormData,
            [name]: value
        })
    }

    const saveFishButton = event => {
        event.preventDefault();
        API.saveFish({
            ...fishFormData,
            TankId:params.id
        }).then(res => {
            API.getThisTankFish(params.id).then(res => {
                
                setFishes(res.data.Fishes);
            })
            setFishFormData({
                color: "#bada55",
                name: "",
                width: 0
            })
            setShowFishForm(false);
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
            <h1>My fishies, let me show them to you from tank {tankName}</h1>
            {isEditable?showFishForm?<FishForm formData={fishFormData} handleChange={handleFishFormChange} saveFish={saveFishButton} />:<button onClick={()=>setShowFishForm(true)}>Add Fish</button>:null}
            {isEditable?<button onClick={feedFish}>Feed Fish</button>:null}
            <div className="Tank">
                {fishes.map(fish => <Fish color={fish.color} name={fish.name} width={fish.width} />)}
            </div>
            <div className="seaFloor"></div>
        </>
    )
}
