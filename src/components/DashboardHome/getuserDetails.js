import axios from "axios"

 const token = localStorage.getItem("user");
const headers={
    'Content-Type': 'application/json', 
    'Authorization': token
  }

 export const getUserDetails=()=>{
    console.log(token);
    axios.get(`https://dash-board.up.railway.app/user-details`,{
        headers:headers
    }).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log("err",err);
    })
}