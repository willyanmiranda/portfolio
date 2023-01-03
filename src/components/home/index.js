import React from "react";
import Social from "./social";
import Data from "./data";
import ScrollDown from "./scrollDown";

const Home = () => {
    return (
        <section id="home">
            <div id="home-container">
                <div id="home-content">
                    <Social />

                    <div id="home-img"></div>

                    <Data />
                </div>
                <ScrollDown />
            </div>
        </section>
    )
}

export default Home;