import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} QuizZen. All rights reserved.</p>
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Topics</a>
          <a href="#" className="hover:underline">About</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
