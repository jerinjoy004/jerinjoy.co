
import React from 'react';

interface CommandProps {
  text: string;
}

export const Command: React.FC<CommandProps> = ({ text }) => (
  <div className="terminal-prompt text-gray-300">
    <span className="command-text">{text}</span>
  </div>
);
