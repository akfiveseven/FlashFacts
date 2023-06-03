import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter }
    from 'react-router-dom';
import { Link } from 'react-router-dom'
import Card from './Card'
import Home from './Home'
import Navbar from './Navbar'
import Create from './Create'
import CardList from './CardList'

export default function App() {
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
