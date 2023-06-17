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
  const [viewAll, setViewAll] = useState(false);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setShowResult(false); // Reset the showResult state when the option changes
    setCurrentCardIndex(0); // Reset the current card index when the option changes
  };

  const handleViewSet = () => {
    const selectedSet = sets.find((set) => set.name === selectedOption);

    if (selectedSet) {
      const cards = selectedSet.cards;

      if (viewAll) {
        return (
          <div>
            <CardList questions={cards} />
          </div>
        );
      } else {
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
            <p>{`Card ${currentCardIndex + 1} / ${cards.length}`}</p>
            <button className="butt btn btn-light" onClick={handlePrev}>Previous</button>
            <button className="butt btn btn-light" onClick={handleNext}>Next</button>
          </div>
        );
      }
    } else {
      return null;
    }
  };

  const handleClick = () => {
    setShowResult(true); // Set showResult to true when the button is clicked
  };

  const handleToggleView = () => {
    setViewAll(!viewAll);
  };

  const handleClear = () => {
    const selectedSet = sets.find((set) => set.name === selectedOption);

    if (selectedSet) {
      const updatedSets = sets.filter((set) => set.name !== selectedOption);
      localStorage.setItem('flashcardSets', JSON.stringify(updatedSets));
    }

    setSelectedOption('');
    setShowResult(false);
    setCurrentCardIndex(0);
  };

  const isDropdownEmpty = selectedOption === '';

  return (
    <div>
      <select className="trigga" value={selectedOption} onChange={handleChange}>
        <option value="">Select an option</option>
        {sets.map((set) => (
          <option key={set.id} value={set.name}>
            {set.name}
          </option>
        ))}
      </select>

      <button className="butt btn btn-light" onClick={handleClick} disabled={isDropdownEmpty}>
       View Set 
      </button>
      <button className="butt btn btn-light" onClick={handleClear} disabled={isDropdownEmpty}>
        Clear Set
      </button>
      <button
        className="butt btn btn-light"
        onClick={handleToggleView}
        disabled={isDropdownEmpty}
      >
        {viewAll ? 'Single Card View' : 'View All Cards'}
      </button>

      {showResult && handleViewSet()}
    </div>
  );
}
