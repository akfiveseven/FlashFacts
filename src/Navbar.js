import React from 'react';
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Landing</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
    </nav>
  );
} 