import React from "react";
import ReactDOM from "react-dom/client";
 function Staticpage(){
    return (
        <div>
            <h1>Static Page</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    )
 }
 ReactDOM.reander(<staticpage />)
 export default Staticpage;