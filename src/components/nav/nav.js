import React from "react";
import "./nav.css";

const Nav = props => (
    <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/"> CLICKY GAME </a>
    <p> Score: {props.score} | topScore: {props.topScore}</p>
    </nav>
)

export default Nav;