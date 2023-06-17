import React, { useState } from 'react';
import Card from './Card';
import './style.css';


export default function CardSetCard(props) {


    function handleClick() {
        // console.log(props.name);
    }

    return (
        <div className={`setCard `}
             onClick={() => handleClick()}>
            <div className="front">
                {props.name}
            </div>
        </div>
    )
}
