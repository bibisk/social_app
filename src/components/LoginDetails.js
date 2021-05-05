import React from 'react';
import axios from 'axios';




export default function LoginDetails(){
    let postData = {
        username: "",
        password: "password"
    };
    
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };
    
    axios.post(
            'http://<host>:(<port>)/<path>', 
            postData, 
            axiosConfig)
        .then((res) => {
            console.log("RESPONSE RECEIVED: ", res);
        })
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })

}