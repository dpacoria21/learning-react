import React from "react";
import  ReactDOM from "react-dom/client";

import './index.css';
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { HooksApp } from "./HooksApp";
// import { CounterApp } from "./01-useState/CounterApp";

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <>
      <CounterWithCustomHook />
    </>
  </React.StrictMode>
)