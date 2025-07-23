import React from "react";
import './home.css';
import trollFace from '../img/troll-face.png'; // ✅ Correct relative path

function Home() {
    return (
        <div>
            <img src={trollFace} alt="Troll Face" />
            <h1>Memes Container</h1>
        </div>
    );
}

export default Home;

