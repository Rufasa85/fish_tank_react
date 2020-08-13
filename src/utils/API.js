const axios = require("axios")
const API= {
    getAllFish:function(){
        return axios.get("http://localhost:8080/api/fishes")
    },
    saveFish:function(fishData){
        return axios.post("http://localhost:8080/api/fishes",fishData)
    },
    makeFishBigger:function(fishId,width){
        return axios.put(`http://localhost:8080/api/fishes/${fishId}`,{width:width})
    }
}

export default API