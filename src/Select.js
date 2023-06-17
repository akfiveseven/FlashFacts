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
  const [quizMode, setQuizMode] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setShowResult(false); // Reset the showResult state when the option changes
    setCurrentCardIndex(0); // Reset the current card index when the option changes
    setQuizMode(false); // Reset the quiz mode when the option changes
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
      } else if (quizMode) {
        const currentCard = cards[currentCardIndex];

        const handleNext = () => {
          setCurrentCardIndex((prevIndex) =>
            prevIndex === cards.length - 1 ? 0 : prevIndex + 1
          );
          setUserAnswer('');
          setShowAnswer(false);
          setCorrectAnswer('');
        };

        const handleCheckAnswer = () => {
          if (userAnswer === currentCard.answer) {
            setCorrectAnswer('Correct!');
          } else {
            setCorrectAnswer('Incorrect!');
          }
          setShowAnswer(true);
        };

        return (
          <div>
            <div>Question: {currentCard.question}</div>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            <button onClick={handleCheckAnswer}>Check Answer</button>
            {showAnswer && <div>Answer: {currentCard.answer}</div>}
            <div>{correctAnswer}</div>
            <button onClick={handleNext}>Next</button>
            <p>{`Card ${currentCardIndex + 1} / ${cards.length}`}</p>
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
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
            <p>{`Card ${currentCardIndex + 1} / ${cards.length}`}</p>
            <button onClick={() => setQuizMode(true)}>Quiz Mode</button>
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

  const handleClear = () => {
    const selectedSet = sets.find((set) => set.name === selectedOption);

    if (selectedSet) {
      const updatedSets = sets.filter((set) => set.name !== selectedOption);
      localStorage.setItem('flashcardSets', JSON.stringify(updatedSets));
    }

    setSelectedOption('');
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

      <button className="bobby btn btn-light" onClick={handleClick} disabled={!selectedOption}>
        Show Set
      </button>
      <button className="bobby btn btn-light" onClick={handleClear} disabled={!selectedOption}>
        Clear Set
      </button>
      <button className="bobby btn btn-light" onClick={() => setViewAll(true)} disabled={!selectedOption}>
        View All Cards
      </button>
      {showResult && handleViewSet()} {/* Render the result of handleViewSet when showResult is true */}
    </div>
  );
}
