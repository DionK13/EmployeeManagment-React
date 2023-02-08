import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = JSON.stringify({
        Email: email,
        Password: password,
      });
      const response = await axios.post(
        "https://localhost:44301/api/Login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setauthenticated(true);
      localStorage.setItem("authenticated", true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="card">
        <div className="card-header">
          <h3 className="fs-5">Login</h3>
        </div>
          <div className="card-body">
            <div className="row">
              <div className="col-xxl-12">
                <input
                  type="text"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="col-xxl-12 mt-1">
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>
            <Button className="btn btn-primary mt-2" type="submit">
              Login
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
