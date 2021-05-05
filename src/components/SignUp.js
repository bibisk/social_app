import React, {useRef} from 'react';
import {useForm} from "react-hook-form";

export default function SignUp() {
  const {register, errors, watch} = useForm();
  const password = useRef();
  password.current = watch("password", "");
//   const onSubmit = async data => {
//     alert(JSON.stringify(data));
//   };
   
  return (
    <div style={{
        display:"flex",
        width: "200px",
        height: "400px",
        margin: "center",
        padding: "15px",
        }}>

        <form onSubmit={e => e.preventDefault()}>
            <h2>Sign up</h2>
            <label>
                Username:
                <input type="text" id="username" {...register("username", {required: true, maxLength: 20 })} />
                {errors.username && 'Username is required'}
            </label>
            <label>
                Email:
                <input type="email" id="email" {...register("email", {required: true})} />
                {errors.email && 'E-Mail is required'}
            </label>
            <label>
                Password:
                <input type="password" id="password" ref={register("password", {pattern: /^[A-Za-z]+$/i })} />
                {errors.password && 'Password is required'}
            </label>
            <label>
                Confirm password:
                <input type="password" id="password" ref={register({validate: value => value === password.current || 
                "The passwords do not match"})} />
                {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
            </label>
            <input type="submit" value="Sign up"/>
        </form>
    </div>
  );
}
