import React from 'react';

const Comment = ({ name, comment, date }) => {
  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <div className="font-semibold text-base md:text-lg">{name}</div>
        <div className="text-sm text-gray-500">{date}</div>
      </div>
      <div className="text-gray-700 text-sm md:text-base">
        {comment}
      </div>
    </div>
  );
};

export default Comment;
