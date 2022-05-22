import React, { useState } from "react";
import "./LoginRegister.css";
import { TextField, Button, Paper } from "@mui/material";
import { Grid, Avatar } from "@mui/material";
import axios from "axios";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link, Navigate } from "react-router-dom";

const ForgotPassword = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === "userName") setUserName(value);
    else if (name === "email") setEmail(value);
    else if (name === "token") setToken(value);
    else setPassword(value);
  };

  const [flag, setFlag] = useState(false);

  const resetClicked = function (name) {

    if(name === 'reset'){

      let formData = new FormData();
      formData.append('username',userName);
      formData.append('email',email)

        axios.post('http://localhost:8080/api/user/forgetPassword',formData)
        .then(
            (response) => {
                if(response.status === 200)
                  setFlag(true)
            }
            )
        
     }
    else{
      let formData = new FormData();
      formData.append('token',token);
      formData.append('newPassword',password);

        axios.put(`http://localhost:8080/api/user/resetPassword/${userName}`,formData)
        .then(
            (response)=> {
                if(response.status === 200){
                  <Navigate to='/LoginRegister'/>
                }
            }
        )
    }
  };

  const avatarStyle = {
    backgroundColor: "#363636",
    color: "white",
  };
  return (
    <Grid
      align="center"
      className="grid, bg_image"
      style={{ overflow: "auto" }}
    >
      <Paper elevation={16} className="paper">
        <div style={{ padding: "30px" }}>
          <Avatar style={avatarStyle}>
            {" "}
            <SettingsIcon />{" "}
          </Avatar>
          <h1 className="head">Forgot Password</h1>
        </div>
        {!flag ? (
          <div style={{ padding: "20px" }}>
            <TextField
              name="userName"
              value={userName}
              onChange={handleInput}
              variant="outlined"
              margin="normal"
              required={true}
              label="Username"
              placeholder="Enter username"
              fullWidth={true}
              size="small"
            />
            <TextField
              name="email"
              value={email}
              onChange={handleInput}
              variant="outlined"
              required={true}
              label="Email"
              placeholder="Enter email"
              fullWidth={true}
              size="small"
              sx={{ marginBottom: "10px" }}
            />

            <Button
              type="submit"
              name="resetPwd"
              variant="outlined"
              fullWidth={true}
              onClick={() => resetClicked("reset")}
            >
              Reset Password
            </Button>

            <Link to="/LoginRegister" className="back loginLink">
              Back to Login
            </Link>
          </div>
        ) : (
          <div style={{ padding: "20px" }}>
            <TextField
              name="token"
              value={token}
              onChange={handleInput}
              label="Code"
              variant="outlined"
              required={true}
              placeholder="Enter 8 digit code sent to Email"
              fullWidth={true}
              size="small"
              sx={{ marginBottom: "10px" }}
            />

            <TextField
              name="password"
              value={password}
              onChange={handleInput}
              variant="outlined"
              required={true}
              label="Password"
              placeholder="Enter new Password"
              fullWidth={true}
              type="password"
              size="small"
              sx={{ marginBottom: "10px" }}
            />

            <Button
              type="submit"
              name="changePwd"
              variant="outlined"
              fullWidth={true}
              onClick={() => resetClicked("change")}
            >
              Change Password
            </Button>
          </div>
        )}
      </Paper>
    </Grid>
  );
};

export default ForgotPassword;
