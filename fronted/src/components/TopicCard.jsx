import React from 'react';
import { Link } from 'react-router-dom';

const TopicCard = ({ id, title, description }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition cursor-pointer">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={`/article/${id}`}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Read More
      </Link>
    </div>
  );
};

export default TopicCard;
