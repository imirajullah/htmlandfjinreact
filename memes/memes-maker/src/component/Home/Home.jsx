import React from "react";
import './home.css';
import trollFace from '../img/troll-face.png'; // ✅ Correct relative path

function Home() {
    return (
        <>
        <div className="home">
            <img src={trollFace} alt="Troll Face" />
            <h1>Memes Container</h1>
        </div>
        <div className=" body-home">
            <p>shut up</p>
            <p>Take my money</p>
            <button>generate a new meme</button>
        </div>
        </>
    );
}

export default Home;

