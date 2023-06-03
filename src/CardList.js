import React, { useState } from 'react'
import Card from './Card'

export default function CardList({ questions }) {


  return (
    questions.map(item => {
      return <Card key={item.id} question={item.question} answer={item.answer}/>;
    })
  );

}
