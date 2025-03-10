
import React from 'react';

interface OutputProps {
  text: string;
}

export const Output: React.FC<OutputProps> = ({ text }) => (
  <div className="ml-4 text-gray-300 whitespace-pre-wrap output-text">
    {text}
  </div>
);
