import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import CardList from './CardList';
import Card from './Card';

export default function Select() {
  const sets = JSON.parse(localStorage.getItem('flashcardSets')) || [];

  const [selectedOption, setSelectedOption] = useState('');
  const [showResult, setShowResult] = useState(false); // State variable to control rendering
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setShowResult(false); // Reset the showResult state when the option changes
    setCurrentCardIndex(0); // Reset the current card index when the option changes
  };

  const handleViewSet = () => {
    const selectedSet = sets.find((set) => set.name === selectedOption);

    if (selectedSet) {
      const cards = selectedSet.cards;
      const currentCard = cards[currentCardIndex];

      const handleNext = () => {
        setCurrentCardIndex((prevIndex) =>
          prevIndex === cards.length - 1 ? 0 : prevIndex + 1
        );
      };

      const handlePrev = () => {
        setCurrentCardIndex((prevIndex) =>
          prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
      };

      return (
        <div>
          <Card question={currentCard.question} answer={currentCard.answer} />
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
          <p>{`Card ${currentCardIndex + 1} / ${cards.length}`}</p>
        </div>
      );
    } else {
      return null;
    }
  };

  const handleClick = () => {
    setShowResult(true); // Set showResult to true when the button is clicked
  };

//   const handleClear = () => {
//     localStorage.removeItem(0);
//     setSelectedOption("");
//   };

  const handleClear = () => {
    const selectedSet = sets.find((set) => set.name === selectedOption);
  
    if (selectedSet) {
      const updatedSets = sets.filter((set) => set.name !== selectedOption);
      localStorage.setItem('flashcardSets', JSON.stringify(updatedSets));
    }
  
    setSelectedOption("");
  };


  return (
    <div className="dropdown">
        <div className="foo">

            <select className="trigga" value={selectedOption} onChange={handleChange}>
                <option value="">Select an option</option>
                {sets.map((set) => (
                <option key={set.id} value={set.name}>
                    {set.name}
                </option>
                ))}
            </select>
        </div>

      <button className="bobby btn btn-light" onClick={handleClick}>Show Set</button> {/* Button to trigger rendering */}
      <button className="bobby btn btn-light" onClick={handleClear}>Clear Set</button>
      {showResult && handleViewSet()} {/* Render the result of handleViewSet when showResult is true */}
    </div>
  );
}
