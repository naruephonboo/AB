import React, { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";
import pic1 from "../components/login.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSuccess: ", data);
      },
      onFailure: (err) => {
        console.error("onFailure: ", err);
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired: ", data);
      },
    });
  };

  return (

    <div className="main">

      <form onSubmit={onSubmit}>
        <label className="top">EV BUS</label>
        <div>
        <div>
            <img class="pic1"  src={pic1} />
        </div>
        </div>
          <label className="welcome">Welcome</label>
        <div className="msg">
          <input
            type="text"
            placeholder="E-MAIL..."
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>

          <div className="pass">
            <input
              type="password"
              placeholder="PASSWORD.."
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            ></input>
          </div>
          <button type="submit">Login</button>
        </div>
        <p><a href="http://localhost:3000/signup">Don't have an account?</a></p>
      </form>
    </div>
  );
};

export default Login;
