import React, { useState, useEffect } from 'react';
import Tank from './pages/Tank';
import NavBar from './components/NavBar';
import "./App.css"
import API from './utils/API';
import { BrowserRouter as Router, Switch, Route,useHistory } from 'react-router-dom'
import Home from './pages/Home';
import FishDetail from './pages/FishDetail';
import Profile from './pages/Profile';

function App() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: ""
  })
  const [currentUser, setCurrentUser] = useState()
 
  useEffect(() => {
    API.getCurrentUser().then(res => {
      console.log(res.data);
      setCurrentUser(res.data.user);
    })
  }, [])
 
    const logout = ()=>{
        API.logout().then(res=>{
          setCurrentUser();
        })
    }

  const loginInputChange = event => {
    const { name, value } = event.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value
    })
  }
  const handleLoginFormSubmit = e => {
    e.preventDefault();
    API.login(loginFormData).then(res => {
      console.log(res.data);
      setLoginFormData({
        email: "",
        password: ""
      })
      API.getCurrentUser().then(res => {
        console.log(res.data);
        setCurrentUser(res.data.user);
      })
    }).catch(err => {
      alert("login failed")
    })
  }
  return (<>
    <Router>
      <NavBar currentUser={currentUser} logout={logout} loginFormData={loginFormData} inputChange={loginInputChange} loginSubmit={handleLoginFormSubmit} />
      <Switch>
        <Route exact path = "/">
          <Home currentUser={currentUser}/>
        </Route>
        <Route path ="/profile">
          <Profile currentUser={currentUser}/>
        </Route>
        <Route path ="/tank/:id">
          <Tank  currentUser={currentUser}/>
        </Route>
        <Route path ="/fish/:id">
          <FishDetail currentUser={currentUser}/>
        </Route>
      </Switch>
    </Router>
  </>
  )
}

export default App;
