import React, { useState } from "react";
import UserPool from "../UserPool";
import pic2 from "../components/add-user.png";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log(data);
    });
  };

  return (
    <div class="main">
      <div class="signup">
      <form onSubmit={onSubmit}>
        <label className="top">EV BUS</label>
        <div> 
        <div> 
              <img class="pic2" src={pic2}/>
            </div>
          </div>
          <label className="signup">Create Account</label>
        <div className="msgsign">
        
          <input
            type="text"
            placeholder="E-mail..."
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        
          <input
            type="password"
            placeholder="PASSWORD..."
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>

          <button className="btsign" type="submit">Signup</button>      
        </div>
       
      </form>
        </div>
    </div>
  );
};

export default Signup;
