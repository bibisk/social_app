import React from 'react';
import {useForm} from "react-hook-form";
import LoginDetails from './LoginDetails';


export default function LoginForm() {
  const {register} = useForm();
   
  return (
    <div style={{
        display:"flex",
        width: "200px",
        height: "400px",
        margin: "center",

        }}>
        <form onSubmit={e => e.preventDefault()}>
            <h2>Login</h2>
            <label>
                Username:
                <input {...register("username", { required: true, maxLength: 20 })} />
            </label>
            <label>
                Password:
                <input {...register("password", { pattern: /^[A-Za-z]+$/i })} />
            </label>
            <input type="submit" value="Login"/>
        </form>
    </div>
  );
}