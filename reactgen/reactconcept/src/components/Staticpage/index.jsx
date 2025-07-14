import React from "react";
import "./statics.css"; // Importing CSS for styling
//import ReactDOM from "react-dom/client";
 function Staticpage(){
    return (
        <div id="staticpage">
             <img src="/logo192.png" alt="React Logo" width="120" />

            <h1>Fun fact about react</h1>
            <ul id="list">
                <li>was first released in 2013</li>
                <li>Was orignally create by jhon walke</li>
                <li>has weel over 100k star on github</li>
                <li>Is maintain by facebook</li>
                <li>Power over thousand of interprise app, includring mobile app</li>
                
            </ul>
        </div>
    )
 }
 //ReactDOM.reander(<staticpage />)
 export default Staticpage;