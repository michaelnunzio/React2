import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./app.css";


ReactDOM.render(<App initialPlayers={App.players} />, document.getElementById("root"));
//this extends everything on app.js if you switch it it'll
//extended something diff- such as extending a component than routing
         