import React,{useState,useEffect} from 'react'
import TankThumbnail from '../../components/TankThumbnail'
import "./style.css"
import API from '../../utils/API'

export default function Home(props) {
    const [tanks, setTanks] = useState([])
    const [newTankName,setNewTankName] = useState("");


    useEffect(() => {
       API.getAllTanksWithFish().then(res=>{
           setTanks(res.data);
       })
    }, [])
    const saveTank = event=>{
        event.preventDefault();
        API.saveTank({name:newTankName}).then(res=>{
            API.getAllTanksWithFish().then(res=>{
                setTanks(res.data);
            })
            setNewTankName("")
        })
    }

    return (
        <div className="Home">
            {props.currentUser?(<form onSubmit = {saveTank}>
                <label>New Tank name:</label>
                <input name="newTankName" type="text" value={newTankName} onChange={(e)=>setNewTankName(e.target.value)}/>
                <button>Save Tank</button>
            </form>):null}
            {tanks.map(tank=><TankThumbnail key = {tank.id} id={tank.id} name={tank.name} fish= {tank.Fishes}/>)}
        </div>
    )
}
