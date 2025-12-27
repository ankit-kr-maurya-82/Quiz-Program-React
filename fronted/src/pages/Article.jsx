import React from 'react';
import { useParams } from 'react-router-dom';
// import articles from '../data/articles.json'; // Optional: if using JSON

// Sample frontend-only articles
const articles = [
  {
    id: 1,
    title: 'What is a Computer?',
    content: 'A computer is an electronic device that processes data and performs tasks based on instructions. It can store, retrieve, and process information efficiently. Modern computers include desktops, laptops, and even smartphones.',
  },
  {
    id: 2,
    title: 'History of India',
    content: 'The history of India is rich and diverse, spanning ancient civilizations, empires, colonization, and independence. From the Indus Valley Civilization to the Mughal Empire and British rule, India has a unique cultural and historical heritage.',
  },
  {
    id: 3,
    title: 'Introduction to Programming',
    content: 'Programming is the process of creating instructions that a computer can execute. It involves learning programming languages like Python, JavaScript, and Java. Programming helps solve problems and build software applications.',
  },
];

const Article = () => {
  const { id } = useParams(); // Get article ID from URL
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <p className="text-center mt-10">Article not found!</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-700">{article.content}</p>
    </div>
  );
};

export default Article;
