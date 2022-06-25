import React from "react";

function Login(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.isRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}

      <button type="submit">
        {props.isRegistered === true ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Login;
