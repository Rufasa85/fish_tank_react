const axios = require("axios")
// const urlPrefix = "http://localhost:8080"
const urlPrefix = "https://fish-tank-api.herokuapp.com"
const API= {
    getAllFish:function(){
        return axios.get(`${urlPrefix}/api/fishes`)
    },
    saveFish:function(fishData){
        return axios.post(`${urlPrefix}/api/fishes`,fishData,{withCredentials:true})
    },
    makeFishBigger:function(fishId,width){
        return axios.put(`${urlPrefix}/api/fishes/${fishId}`,{width:width},{withCredentials:true})
    },
    login:function(userData){
        return axios.post(`${urlPrefix}/api/users/login`,userData,{withCredentials:true})
    },
    getCurrentUser:function(){
        return axios.get(`${urlPrefix}/api/users/readsessions`,{withCredentials:true})
    }
}

export default API