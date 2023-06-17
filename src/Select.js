import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import CardList from './CardList';

export default function Select({ setList }) {
  const sets = JSON.parse(localStorage.getItem('flashcardSets')) || [];

  const [selectedOption, setSelectedOption] = useState('');
  const [showResult, setShowResult] = useState(false); // State variable to control rendering

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setShowResult(false); // Reset the showResult state when the option changes
  };

  const handleViewSet = () => {
    const selectedSet = sets.find((set) => set.name === selectedOption);
    
    if (selectedSet) {
      return (
        <div>
          <CardList questions={selectedSet.cards} />
        </div>
      );
    } else {
        return null;
    }
  };
  
  

  const handleClick = () => {
    setShowResult(true); // Set showResult to true when the button is clicked
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">Select an option</option>
        {sets.map((set) => (
          <option key={set.id} value={set.name}>
            {set.name}
          </option>
        ))}
      </select>

      <button onClick={handleClick}>Show Result</button> {/* Button to trigger rendering */}
      {showResult && handleViewSet()} {/* Render the result of handleViewSet when showResult is true */}
    </div>
  );
}
