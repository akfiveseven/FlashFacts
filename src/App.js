import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter }
    from 'react-router-dom';
import { Link } from 'react-router-dom'
import Card from './Card'
import Home from './Home'
import Navbar from './Navbar'

export default function App() {
  const [questions, setQuestions] = useState([]);

  const questionRef = useRef();
  const answerRef = useRef();

  function getQuestions() {
    return questions;
  }

  function handleClick(e) {
    if (questionRef.current.value === "" || answerRef.current.value === "") {
      return;
    }
    const updatedQuestions = [...questions, { id: questions.length, question: questionRef.current.value, answer: answerRef.current.value }];
    // React rerenders/updates everytime setQuestions is called
    setQuestions(updatedQuestions);
    // Clear input fields after submission
    questionRef.current.value = '';
    answerRef.current.value = '';
  }

  function handleClear(e) {
    setQuestions([]);

  }

  function handlePage(e) {
    < Home/>
  }
  

  const cards = questions.map(item => (
    <Card 
      key={item.id}
      question={item.question}
      answer={item.answer}
    />
  ));

  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem('questionKey'))
    if (storedQuestions) setQuestions(storedQuestions)
  }, [])

  useEffect(() => {
    localStorage.setItem('questionKey', JSON.stringify(questions));
  }, [questions]);

   useEffect(() => {
     console.log(questions); // Log the questions array whenever it changes
   }, [questions]);

  return (
    <>
      <input ref={questionRef} type="text" placeholder="Question"></input>
        <input ref={answerRef} type="text" placeholder="Answer"></input>
        <button onClick={handleClick}>Submit</button>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handlePage}>Home</button>
        {cards}
      <Router>
        <Routes>
          <Route path="/" />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
