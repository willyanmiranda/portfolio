import React from "react";

const ScrollDown = () => {
    return(
        <div id="home-scroll">
            <a href="#about" id="home-scroll-button">
            <svg
                width="32px"
                height="32px"
                class="home__scroll-mouse"
                viewBox="0 0 247 390"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="wheel"
                  d="M123.359,79.775l0,72.843"
                ></path>
                <path
                  id="mouse"
                  d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                ></path>
              </svg>
              <span id="home-scroll-name">Scroll Down</span>
              <i className="uil uil-arrow-down" id="home-scroll-arrow"></i>
            </a>
        </div>
    )
}

export default ScrollDown;