import React from "react";
import './home.css';
import trollFace from '../img/troll-face.png';
import { Link } from "react-router-dom"; // ✅ Import Link

function Home() {
    return (
        <>
            <div className="home">
                <img src={trollFace} alt="Troll Face" />
                <h1>Memes Container</h1>
            </div>

            <div className="body-home">
                <p>Shut up</p>
                <p>Take my money</p>
            </div>

            <Link to="/memes">
                <button>Generate a new meme</button>
            </Link>

            <img className="img" src={trollFace} alt="Troll Face" />
        </>
    );
}

export default Home;



