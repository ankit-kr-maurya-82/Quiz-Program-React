import React from 'react';
import QuizCard from '../components/QuizCard';
import TopicCard from '../components/TopicCard';

// Frontend-only sample data
const quizzes = [
  { id: 1, title: 'Computer Basics', totalQuestions: 5 },
  { id: 2, title: 'History of India', totalQuestions: 5 },
];

const topics = [
  {
    id: 1,
    title: 'What is a Computer?',
    description: 'Learn the basics of computers and how they work.',
  },
  {
    id: 2,
    title: 'History of India',
    description: 'Explore major events in Indian history.',
  },
];

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-600 mb-3">
          Welcome to QuizZen 🧠
        </h1>
        <p className="text-gray-600 text-lg">
          Learn concepts and test your knowledge with quizzes
        </p>
      </div>

      {/* Featured Quizzes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Quizzes</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz) => (
            <QuizCard
              key={quiz.id}
              id={quiz.id}                 // ✅ IMPORTANT FIX
              title={quiz.title}
              totalQuestions={quiz.totalQuestions}
            />
          ))}
        </div>
      </section>

      {/* Topics Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Learn Topics</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <TopicCard
              key={topic.id}
              id={topic.id}               // future use
              title={topic.title}
              description={topic.description}
            />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
