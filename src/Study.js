import React from 'react';
import './style.css';
import Card from './Card';
import SetList from './SetList';
import CardList from './CardList';
import Select from './Select';

export default function Study() {

    const sets = JSON.parse(localStorage.getItem('flashcardSets')) || []; // getting sets data in local storage

    function handleView() {
       console.log(sets[0].name);
       
    }
    


           // <CardList questions={sets[0].cards} /> 
           // <SetList onClick="handleView"/>
    return (
        <div className="viewbtn">
            <div className="viewbody">
                <h1>My Sets</h1>
            </div>
            <Select />
            {/* <button onClick={handleView}>Hi</button> */}

            {/* <SetList onClick={handleView}/> */}
            {/* <CardList questions={sets[0].cards} /> */}
        </div>
    );
}

