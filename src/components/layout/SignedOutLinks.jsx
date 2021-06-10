import React from "react";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const style = {
  color: "white",
  textDecoration: "none",
};

function SignedOutLinks() {
  return (
    <div>
      <NavLink to="/registration">
        <Button style={style}>Register</Button>
      </NavLink>
      <NavLink to="/authentication">
        <Button style={style}>Login</Button>
      </NavLink>
    </div>
  );
}

export default SignedOutLinks;
