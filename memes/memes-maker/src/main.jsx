import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Home from "./component/Home/Home";
//import Memes from "./component/Home/Memes"; // ✅ Correct path
import Timer from "./component/Timer/Timer";

function Main() {
    return (
        <BrowserRouter> 
            <Routes>
                {/* <Route path="/" element={<Home />} />
                <Route path="/memes" element={<Memes />} /> */}
                <Route path="/Timer" element={<Timer/>} />
            </Routes>
        </BrowserRouter> 
    );
}

export default Main;