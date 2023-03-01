import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { login,logOut } from "./redux/loginSlicer";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch =useDispatch();

  const handleSubmit = (e) =>{
    e.preventDefault();
    // (name.trim() == "");       
    dispatch(login({
        name:"name",
        email:"email",
        password:"password",
        loggedIn:true
    }))
  }
  

  return (
    <div className="form">
      <form  onSubmit={(e) => handleSubmit(e)}>
        <h1>Login Here</h1>
        <br></br>
        <label>Name:</label>
        <input
          type="text"
          placeholder="name"
          style={{ marginTop: "20px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required  
        />
        <br></br>
        <label>Email:</label>
        <input
          type="text"
          placeholder="email"
          style={{ marginTop: "20px" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br></br>
        <label>Password:</label>
        <input
          type="password"
          placeholder="password"
          style={{ marginTop: "20px" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br></br>
        <button  type="submit" style={{ marginTop: "20px" }}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
