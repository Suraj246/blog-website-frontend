import React, { useState } from "react";
import axios from "axios";

import { NavLink, useNavigate } from "react-router-dom";
import "./header.scss"
function SignUp() {
  const navigate = useNavigate();


  const [input, setInput] = useState({ username: "", email: "", password: "" });


  const inputHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInput({ ...input, [name]: value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, email, password } = input

    if (!username || !email || !password) {
      alert("Please enter a valid email or password")
      return
    }
    try {
      const { data } = await axios.post("https://blog-backend-swo1.onrender.com/signup",
        // const { data } = await axios.post("http://localhost:4000/signup",
        {
          ...input,
        },
      );
      if (data) {
        navigate("/login")
      }
      else {
        return false;
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <div className="sing_up_page">
      <div className="signup-right">
        <div className="signup-form-container">
          <div className="signup-msg-right">
            <span className="signup-title-right">Begin your journey!</span>
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              className="input"
              name="username"
              placeholder="Username"
              autoComplete="off"
              value={input.username}
              onChange={inputHandler}
            />
            <input
              type="email"
              className="input"
              name="email"
              placeholder="email"
              autoComplete="off"
              value={input.email}
              onChange={inputHandler}
            />

            <input
              type="password"
              className="input"
              name="password"
              placeholder="password"
              autoComplete="off"
              value={input.password}
              onChange={inputHandler}
            />
            <button type="submit" className="signup">Sign Up</button>
            <div className="signup-btn-container">
              <span>Already have an account ?</span>
              <NavLink to="/login" className="a"> Log In</NavLink>
            </div>
          </form>
        </div>

      </div>

    </div>
  );
}

export default SignUp;