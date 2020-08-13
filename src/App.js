import React,{useState,useEffect} from 'react';
import Tank from './components/Tank';
import NavBar from './components/NavBar';
import "./App.css"
import API from './utils/API';



function App() {
const [loginFormData, setLoginFormData] = useState({
  email:"",
  password:""
})
const [currentUser, setCurrentUser] = useState()

useEffect(() => {
  API.getCurrentUser().then(res=>{
    console.log(res.data);
    setCurrentUser(res.data.user);
  })
}, [])

const loginInputChange=event=>{
  const{name,value}=event.target;
  setLoginFormData({
    ...loginFormData,
    [name]:value
  })
}
const handleLoginFormSubmit = e=>{
  e.preventDefault();
  API.login(loginFormData).then(res=>{
    console.log(res.data);
    setLoginFormData({
      email:"",
      password:""
    })
  }).catch(err=>{
    alert("login failed")
  })
}
  return (<>
      <NavBar currentUser = {currentUser} loginFormData={loginFormData} inputChange={loginInputChange} loginSubmit={handleLoginFormSubmit}/>
      <Tank />
    </>
  )
}

export default App;
