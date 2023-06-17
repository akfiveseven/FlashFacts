import React, { useState } from 'react'
import Card from './Card'
import CardSetCard from './CardSetCard';

export default function SetList({}) {


    const sets = JSON.parse(localStorage.getItem('flashcardSets')) || []; // getting sets data in local storage


    return (
        sets.map(item => {
            return <CardSetCard key={new Date().getTime()} name={item.name} questions={item.cards}/>;
        })
    );

}