import React, { useState } from 'react';
import './style.css';


export default function Card(props) {
    const [flip, setFlip] = useState(false); 

    return (
        <div className={`card ${flip ? 'flip' : ''}`}
             onClick={() => setFlip(!flip)}>
            <div className="front">
                {props.question}
            </div>
            <div className="back">{props.answer}</div>
        </div>
    )
}