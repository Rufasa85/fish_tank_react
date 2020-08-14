import React,{useEffect,useState} from 'react'
import Fish from "../../components/Fish"
import API from '../../utils/API'
import {useParams,useHistory} from 'react-router-dom'

export default function FishDetail() {
    const [fish, setFish] = useState({
        color:"#bada55",
        name:"",
        width:0
    })
    const history = useHistory()
    const params = useParams()
    useEffect(() => {
        API.getOneFish(params.id).then(res=>{
            console.log(res.data);
            setFish(res.data);
        })
    }, [])

    const changeFish = e=>{
        const {name,value} = e.target;
        setFish({
            ...fish,
            [name]:value
        })
    }
    const updateFish = event=>{
        event.preventDefault();
        API.updateFish(params.id,fish).then(res=>{
            API.getOneFish(params.id).then(res=>{
                console.log(res.data);
                setFish(res.data);
            })
        })
    } 
    const deleted = ()=>{
        API.deleteFish(params.id).then(res=>{
            console.log(res.data);
            history.push("/");
        })
    }
    return (
        <div>
          <form onSubmit={updateFish}>
              <label>name</label>
              <input type="text" name="name" value={fish.name} onChange={changeFish}/>
              <label>width</label>
              <input type="number" name="width" value={fish.width} onChange={changeFish}/>
              <label>color</label>
              <input type="color" name="color" value={fish.color} onChange={changeFish}/>
              <label>tank</label>
              {/* <select>
                  <option value = "1">first</option>
                  <option value = "2">second</option>
              </select> */}
              <button >Save changes</button>
          </form>
          <Fish name={fish.name} color={fish.color}width={fish.width}/>
          <button onClick={deleted}>delete this fish!</button>
        </div>
    )
}
