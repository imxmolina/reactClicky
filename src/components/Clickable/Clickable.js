import React from "react";
import "./Clickable.css";

const Clickable = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} onClick={(e) => props.handleClick}/>
        </div>
    </div>
);

export default Clickable;