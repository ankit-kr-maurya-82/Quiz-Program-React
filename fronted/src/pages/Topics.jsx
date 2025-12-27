import React from 'react';
import TopicCard from '../components/TopicCard';
// import articles from '../data/articles.json'; // Optional if using JSON

// Sample frontend-only topics
const topics = [
  {
    id: 1,
    title: 'What is a Computer?',
    description: 'Learn the basics of computers.',
  },
  {
    id: 2,
    title: 'History of India',
    description: 'Explore major events in Indian history.',
  },
  {
    id: 3,
    title: 'Introduction to Programming',
    description: 'Understand the basics of coding and programming languages.',
  },
];

const Topics = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">All Topics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <TopicCard
            key={topic.id}
            id={topic.id}
            title={topic.title}
            description={topic.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Topics;
