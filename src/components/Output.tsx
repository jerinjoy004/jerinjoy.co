
import React from 'react';

type OutputProps = {
  text: string;
};

export const Output: React.FC<OutputProps> = ({ text }) => {
  // If the text is just a command response without HTML
  if (!text.includes('<a')) {
    return <div className="output-text mt-2 whitespace-pre-wrap">{text}</div>;
  }
  
  // If the text contains HTML elements (like links)
  return (
    <div 
      className="output-text mt-2 whitespace-pre-wrap"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};
