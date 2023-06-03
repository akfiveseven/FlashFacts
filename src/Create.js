import React, { useState, useRef, useEffect } from 'react';
import Card from './Card';
import CardList from './CardList'
import './style.css';

export default function Create() {

  const [questions, setQuestions] = useState([]);

  const questionRef = useRef();
  const answerRef = useRef();
  

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
    setQuestions([]);
  }


  //<button onClick={handleClear}>Clear</button>

  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem('questionKey'))
    if (storedQuestions) setQuestions(storedQuestions)
  }, [])

  useEffect(() => {
    localStorage.setItem('questionKey', JSON.stringify(questions));
  }, [questions]);



  return (
    <div className="thing text-center">
      <input className="field form-control" ref={questionRef} type="text" placeholder="Question"></input>
      <input className="field form-control" ref={answerRef} type="text" placeholder="Answer"></input>
      <button className="bob1 btn btn-light" onClick={handleSubmit}>Submit</button>
      <button className="bob2 btn btn-light" onClick={handleClear}>Clear</button>
      <div className="cardy">
        <CardList questions={questions} />
      </div>
    </div>
  );
}
