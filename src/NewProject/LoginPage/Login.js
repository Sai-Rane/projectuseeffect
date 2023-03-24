import React, { useEffect, useState } from "react";
import axios from "axios";
const Login = () => {
  const baseURL = "http://localhost:3001/";
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loginDetails, setloginDetails] = useState([]);
  console.log(username, password);
  console.log(loginDetails);

  // const handleLogin = (e) => {
  //   console.log("login");
  //   setloginDetails((prev) => [
  //     ...prev,
  //     { username: username, password: password },
  //   ]);
  //   // setloginDetails({ username: username, password: password });
  //   console.log("e", e);
  // };
  const handleLogin = () => {
    console.log("login");
    axios
      .post(baseURL, { body: { username: username, password: password } })
      .then((response) => console.log(response));
    setloginDetails((prev) => [
      ...prev,
      { username: username, password: password },
    ]);
  };
  // useEffect(() => {
  //   axios
  //     .post(baseURL, { body: loginDetails })
  //     .then((response) => console.log(response));
  // }, []);
  return (
    <>
      <div>Login Page</div>
      <input
        type="text"
        value={username}
        placeholder="Enter Username"
        onChange={(e) => {
          setusername(e.target.value);
        }}
        autoComplete="off"
      />
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        autoComplete="off"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
