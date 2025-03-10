
import React, { useState, useEffect, useRef } from 'react';
import { Command } from './Command';
import { Output } from './Output';
import { commands } from '../utils/commands';

export const Terminal: React.FC = () => {
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const output = commands[trimmedCmd] || "Command not found. Type 'help' for available commands.";
    
    setHistory(prev => [...prev, { command: cmd, output }]);
    setCurrentCommand('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentCommand);
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div 
        ref={terminalRef}
        className="max-w-3xl mx-auto bg-black/90 p-4 rounded-lg shadow-xl overflow-auto"
        style={{ minHeight: '60vh', maxHeight: '80vh' }}
      >
        <div className="typing-animation mb-4">
          Welcome to my interactive web terminal.
          <br />
          For a list of available commands, type 'help'.
        </div>
        
        {history.map((entry, index) => (
          <div key={index} className="mb-4">
            <Command text={entry.command} />
            <Output text={entry.output} />
          </div>
        ))}
        
        <div className="flex items-center terminal-prompt">
          <input
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyPress={handleKeyPress}
            className="bg-transparent border-none outline-none flex-1 text-gray-200"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};
