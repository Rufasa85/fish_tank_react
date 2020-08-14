import React,{useState,useEffect} from 'react'
import TankThumbnail from '../../components/TankThumbnail'
import API from '../../utils/API';
import { useHistory } from "react-router-dom";
import "./style.css"
import FishCard from '../../components/FishCard';

export default function Profile(props) {
    const [tanks, setTanks] = useState([]);
    const [fish, setFish] = useState([]);
    const history = useHistory();

    useEffect(() => {
        if(!props.currentUser){
            history.push('/')
        }
        API.getCurrentTanksFish().then(res=>{
            console.log(res.data)
            setTanks(res.data.Tanks);
            setFish(res.data.Fishes);
        })
    }, [props.currentUser])

    return (
        <div className="Profile">
            <h1>My tanks</h1>
            <div className="userTanks">
                {tanks.map(tank=><TankThumbnail key={tank.id} name={tank.name} fish={tank.Fishes} />)}
            </div>
            <h3>My fish</h3>
            <div className="userFishCards">
                {fish.map(fishie=><FishCard id = {fishie.id} name={fishie.name} color={fishie.color} tankId={fishie.TankId} width={fishie.width}/>)}
            </div>
        </div>
    )
}
