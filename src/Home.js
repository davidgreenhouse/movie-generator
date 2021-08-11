import React from "react";
import { Link } from "react-router-dom";

function Home() {

    function buttonClick(genre) {
        console.log(genre);
    }

    return (
        <div className="root">
        <h2 className="text-center">What you feeling tonight?</h2>
        <div className="button-group">
            <Link to="/genre">
                <button className="button" id="comedy-button" onClick={() => buttonClick("comedy")}>
                    <h3>Comedy</h3>
                </button>
            </Link>
            <Link to="/genre">
                <button className="button" id="drama-button" onClick={() => buttonClick("drama")}>
                    <h3>Drama</h3>
                </button>
            </Link>
        </div>
    </div>
    )
}

export default Home;