import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">About QuizZen</h1>
      
      <p className="mb-4 text-gray-700">
        QuizZen is a simple and interactive platform for students to learn and test their knowledge.
        You can explore various topics, take quizzes, and track your progress—all in a frontend-only React app.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-3">Features</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Interactive quizzes with instant scoring</li>
        <li>Wide range of educational topics</li>
        <li>Frontend-only implementation using React.js</li>
        <li>Responsive design for all devices</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Contact</h2>
      <p className="text-gray-700">
        For suggestions or feedback, you can reach out via email: <a href="mailto:quizzen@example.com" className="text-blue-600 hover:underline">quizzen@example.com</a>
      </p>
    </div>
  );
};

export default About;
