import React, { useState } from "react";
import "../styles/Header.css";
import { Link, NavLink } from "react-router-dom";
import dawgsTransparent from '../assets/dawgs-transparent.png'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>
            <Link to="/" className="title">
                <img src={dawgsTransparent} alt="Dawgs For Harris" className="icon" />
            </Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/policy">Policy</NavLink>
                </li>
                <li>
                    <NavLink to="/vote">Voting/Registration</NavLink>
                </li>
                <li>
                    <NavLink to="/memes">Memes</NavLink>
                </li>
                <li id="join-button">
                    <NavLink to="/join">Join</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;