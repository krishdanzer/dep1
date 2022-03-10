import React from "react";
import  './Die.css';

const Die = ({ face }) => {
    return <i className={`fas fa-dice-${face}`} />;
};

export default Die;
