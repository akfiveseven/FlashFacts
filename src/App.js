import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter }
    from 'react-router-dom';
import { Link } from 'react-router-dom'
import Card from './Card'
import Home from './Home'
import Navbar from './Navbar'
import Create from './Create'

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


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </>
  );
}
