import React from "react";
import "./LoginOrRegis.css";
import image from "../../images/login.jpg";
import { Link } from "react-router-dom";
const LoginOrRegis = () => {
  return (
    <div>
      <div className="login-container">
        <div className="d-flex justify-content-between align-items-center login-container ">
          <div className="w-100 align-items-center">
            <div>
              <h1>Login</h1>
            </div>
            <div>
              <p className="mb-0 mt-3">User ID</p>
              <input type="text" />
            </div>
            <div>
              <p className="mb-0 mt-3">Email address</p>
              <input type="email" />
            </div>
            <div>
              <p className="mb-0 mt-3">Your password</p>
              <input type="password" />
            </div>
            <button>Login</button>
            <Link to="/login">
              <p className="mb-0 mt-0">
                <span>registration</span>
              </p>
            </Link>
          </div>
          <div>
            <img src={image} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOrRegis;
