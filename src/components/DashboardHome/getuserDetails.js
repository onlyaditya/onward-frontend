import axios from "axios"

const token = localStorage.getItem("token");
const getUserDetails=()=>{

    axios.get(`https://dash-board.up.railway.app/get-userDetails`,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': token
          }
    })
}