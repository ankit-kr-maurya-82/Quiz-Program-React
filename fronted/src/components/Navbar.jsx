import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center shadow">
      <Link to="/" className="text-2xl font-bold">QuizZen</Link>

      <div className="space-x-6 text-lg">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/topics" className="hover:text-yellow-300">Topics</Link>
        <Link to="/about" className="hover:text-yellow-300">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
