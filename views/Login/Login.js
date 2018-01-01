import React from "react";
import TextField from "material-ui/TextField";
import { Card } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";

const Login = props => {
  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <TextField name="username" label="User Name" />
        <TextField name="password" type="password" label="Password" />
        <div>
          <RaisedButton type="submit" className="next" primary>
            Login
          </RaisedButton>
        </div>
      </form>
    </div>
  );
};

export default Login;
