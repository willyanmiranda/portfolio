import React from "react";
import { useState } from "react";

const Header = () => {

    const [toggle, setToggle] = useState(false)

    const openMenu = () => {
        if(toggle === false) {
            setToggle(true)
        } else {
            setToggle(false)
        }
    }

    return (
       <header id="header">
        <nav id="nav-container">
            <span id="nav-logo">Willyan</span>

            <div id={toggle ? "nav-menu" : "nav-menu-close"}>
                <ul id="nav-list">
                    <li id="nav-item">
                        <a href="#home" id="nav-link">
                            <i className="uil uil-estate" id="nav-icon"></i> Home
                        </a>
                    </li>
                    <li id="nav-item">
                        <a href="#about" id="nav-link">
                            <i className="uil uil-user" id="nav-icon"></i> Sobre
                        </a>
                    </li>
                    <li id="nav-item">
                        <a href="#skills" id="nav-link">
                            <i className="uil uil-file-alt" id="nav-icon"></i> Skills
                        </a>
                    </li>
                    <li id="nav-item">
                        <a href="#certificates" id="nav-link">
                            <i className="uil uil-briefcase" id="nav-icon"></i> Certificados
                        </a>
                    </li>
                    <li id="nav-item">
                        <a href="#portfolio" id="nav-link">
                            <i className="uil uil-scenery" id="nav-icon"></i> Portfólio
                        </a>
                    </li>
                    <li id="nav-item">
                        <a href="#contact" id="nav-link">
                            <i className="uil uil-message" id="nav-icon"></i> Contato
                        </a>
                    </li>
                </ul>

                <i className="uil uil-times" id="nav-close" onClick={openMenu}></i>
            </div>

            <div id="nav-toggle">
                <i className="uil uil-apps" onClick={openMenu}></i>
            </div>
        </nav>

       </header>
    )
}

export default Header;