import React, { useState } from "react";
import "../styles/Header.css";
import { Link, NavLink } from "react-router-dom";
import dawgsTransparent from '../assets/dawgs-transparent.png'
import dawgsBlue from '../assets/dawgs-blue.svg'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>
            <Link to="/" className="title">
                <img src={dawgsBlue} alt="Dawgs For Harris" className="header-image" />
            </Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li className="nav-list-item">
                    <NavLink to="/policy">Policy</NavLink>
                </li>
                <li className="nav-list-item">
                    <NavLink to="/vote">Voting/Registration</NavLink>
                </li>
                <li className="nav-list-item">
                    <NavLink to="/memes">Memes</NavLink>
                </li>
                <li className="nav-list-item" id="join-button">
                    <a href="https://groupme.com/join_group/99846369/9Mm8yIkb" target="_blank">Join</a>
                </li>
            </ul>
        </nav>
    );
};

export default Header;