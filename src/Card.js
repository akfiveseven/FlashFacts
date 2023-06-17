import React, { useState } from 'react';
import './style.css';

export default function Card(props) {
  const [flip, setFlip] = useState(false);

  const cardSideText = flip ? 'Answer' : 'Question';

  return (
    <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
      <div className="front">
        <div className="card-content">{props.question}</div>
      </div>
      <div className="back">
        <div className="card-content">{props.answer}</div>
      </div>
    </div>
  );
}
