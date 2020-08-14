const axios = require("axios")
// const urlPrefix = "http://localhost:8080"
const urlPrefix = "https://fish-tank-api.herokuapp.com"
const API = {
    //tanks
    getAllTanksWithFish: function () {
        return axios.get(`${urlPrefix}/api/tanks/fishes`)
    },
    getThisTankFish: function (id) {
        return axios.get(`${urlPrefix}/api/tanks/${id}/fishes`)
    },
    saveTank: function (tankData) {
        return axios.post(`${urlPrefix}/api/tanks`, tankData, { withCredentials: true })
    },
    //fish
    getAllFish: function () {
        return axios.get(`${urlPrefix}/api/fishes`)
    },
    getOneFish: function (id) {
        return axios.get(`${urlPrefix}/api/fishes/${id}`)
    },
    saveFish: function (fishData) {
        return axios.post(`${urlPrefix}/api/fishes`, fishData, { withCredentials: true })
    },
    makeFishBigger: function (fishId, width) {
        return axios.put(`${urlPrefix}/api/fishes/grow/${fishId}`, { width: width }, { withCredentials: true })
    },
    updateFish: function (fishId, fishData) {
        return axios.put(`${urlPrefix}/api/fishes/${fishId}`, fishData, { withCredentials: true })
    },
    deleteFish:function(fishId){
        return axios.delete(`${urlPrefix}/api/fishes/${fishId}`,{withCredentials:true})
    },
    //users
    login: function (userData) {
        return axios.post(`${urlPrefix}/api/users/login`, userData, { withCredentials: true })
    },
    logout:function () {
        return axios.get(`${urlPrefix}/api/users/logout`, { withCredentials: true })
    },
    getCurrentUser: function () {
        return axios.get(`${urlPrefix}/api/users/readsessions`, { withCredentials: true })
    },
    getCurrentUsersTanks:function(id){
       return axios.get(`${urlPrefix}/api/users/${id}/tanks`)
    },
    getCurrentTanksFish:function () {
        return axios.get(`${urlPrefix}/api/users/currentdata`, { withCredentials: true })
    }
}

export default API