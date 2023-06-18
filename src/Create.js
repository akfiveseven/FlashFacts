import React, { useState, useRef, useEffect } from 'react';
import Card from './Card';
import CardList from './CardList'
import './style.css';

export default function Create() {

  const [questions, setQuestions] = useState([]);

  const questionRef = useRef();
  const answerRef = useRef();
  const nameRef = useRef();

  

  function handleSubmit() {
    if (questionRef.current.value === "" || answerRef.current.value === "") {
      return;
    }

    if (questionRef.current.value.length >= 161 || answerRef.current.value.length >= 161) {
      alert("Question or Answer is too long (Cannot be greater than 160 characters)")
      return;
    }

    const updatedQuestions = [...questions, { id: questions.length, question: questionRef.current.value, answer: answerRef.current.value }];
    // React rerenders/updates everytime setQuestions is called
    setQuestions(updatedQuestions);
    // Clear input fields after submission
    questionRef.current.value = '';
    answerRef.current.value = '';
  }

  function handleClear() {
    localStorage.clear(); 
    setQuestions([]);
  }

  function handleSave() {
    if (questions.length === 0) {
      alert("No flashcards to save.");
      return;
    }

    const sets = JSON.parse(localStorage.getItem('flashcardSets')) || []; // getting sets data in local storage
    const selectedSet = sets.find((set) => set.name === nameRef.current.value);

    if (selectedSet) {
      alert("Set name has already been saved.")
      return;
    }


    if (nameRef.current.value === "") {
      alert("EMPTY SET NAME");
      return;
    }
  
    const flashcardSet = {
      id: new Date().getTime(), // Generate a unique ID for the flashcard set
      cards: questions, // Save the current list of questions as cards in the set
      name: nameRef.current.value
    };
  
    // Save the flashcard set to local storage

    // LOAD
    const savedSets = JSON.parse(localStorage.getItem('flashcardSets')) || []; // getting sets data in local storage

    savedSets.push(flashcardSet);
    localStorage.setItem('flashcardSets', JSON.stringify(savedSets));
  
    // Clear the questions
    setQuestions([]);
    nameRef.current.value = '';
    alert("Flashcard set saved successfully!");
  }





  return (
    <div className="thing text-center">
      <input className="field form-control" ref={nameRef} type="text" placeholder="Set Name"></input>
      <input className="field form-control" ref={questionRef} type="text" placeholder="Question"></input>
      <input className="field form-control" ref={answerRef} type="text" placeholder="Answer"></input>
      <button className="btn btn-light" onClick={handleSubmit}>Submit Card</button>
      <button className="createButtonStyle btn btn-light" onClick={handleSave}>Save Set</button>
      <CardList questions={questions} />
    </div>
  );
}
