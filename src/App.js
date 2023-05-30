import React, { useEffect, useState, useRef } from 'react';
import Card from './Card'

export default function App() {
  const [questions, setQuestions] = useState([]);

  const cards = questions.map(item => (
    <Card 
      key={item.id}
      question={item.question}
      answer={item.answer}
    />
  ));

  const questionRef = useRef();
  const answerRef = useRef();

  function handleClick(e) {
    const updatedQuestions = [...questions, { question: questionRef.current.value, answer: answerRef.current.value }];
    console.log("test: " + updatedQuestions);
    setQuestions(updatedQuestions);

    // Clear input fields after submission
    questionRef.current.value = '';
    answerRef.current.value = '';
  }

  useEffect(() => {
    console.log(questions); // Log the questions array whenever it changes
  }, [questions]);

  return (
    <div>
      <input ref={questionRef} type="text" placeholder="Question"></input>
      <input ref={answerRef} type="text" placeholder="Answer"></input>
      <button onClick={handleClick}>Submit</button>
      {cards}
    </div>
  );
}
