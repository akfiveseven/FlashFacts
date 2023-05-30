import React from 'react';


export default function Card(props) {

    return (
        <div className='card'>
            <p>Question: {props.question} </p>
            <p>Answer: {props.answer}</p>
        </div>
    )
}