import React from "react";
import Login from "./Login";
var userRegistered = true;

function App() {
  return (
    <div className="container">
      <Login isRegistered={userRegistered} />
    </div>
  );
}

export default App;
