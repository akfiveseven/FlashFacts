import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './style.css'
export default function Select({ setList }) {

    const sets = JSON.parse(localStorage.getItem('flashcardSets')) || []; // getting sets data in local storage

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    }

    return (
        <div>
            <select value={selectedOption} onChange={handleChange}>
                <option value="">Select an option</option>
                <option value="option1">{sets[0].name}</option>
            </select>
        </div>


    );
} 
