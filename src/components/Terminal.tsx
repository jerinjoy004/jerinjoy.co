import React, { useState, useEffect, useRef } from 'react';
import { Command } from './Command';
import { Output } from './Output';
import { commands } from '../utils/commands';

export const Terminal: React.FC = () => {
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [inputVisible, setInputVisible] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
    // Focus the input when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === '') return;
    
    let output;
    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    } else {
      output = commands[trimmedCmd] || `Command not found: '${trimmedCmd}'. Type 'help' for available commands.`;
    }
    
    setHistory(prev => [...prev, { command: trimmedCmd, output }]);
    setCurrentCommand('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentCommand);
    }
  };

  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const asciiArt = `
   ╔╗╔═╗╦═╗╦╔╗╔
   ╠╩╗║╣ ╠╦╝║║║║
   ╚═╝╚═╝╩╚═╩╝╚╝

   ╔╗╔═╗╔═╗╔═╗╔═╗╦ ╦
   ╠╩╗║ ║╚═╗║╣ ╠═╝╠═╣
   ╚═╝╚═╝╚═╝╚═╝╩  ╩ ╩

   ╔╗╔═╗╦ ╦
   ╠╩╗║ ║╚╦╝
   ╚═╝╚═╝ ╩ 
  `;

  return (
    <div className="min-h-screen p-4 md:p-8 flex items-center justify-center">
      <div 
        ref={terminalRef}
        className="w-full max-w-3xl mx-auto bg-black/90 p-4 rounded-lg shadow-xl overflow-auto"
        style={{ minHeight: '60vh', maxHeight: '80vh' }}
        onClick={handleContainerClick}
      >
        <div className="text-green-500 font-mono whitespace-pre mb-4">
          {asciiArt}
        </div>
        <div className="mb-4">
          Welcome to my interactive web terminal.
          <br />
          For a list of available commands, type <span className="text-green-500">'help'</span>.
        </div>
        
        {history.map((entry, index) => (
          <div key={index} className="mb-4">
            <Command text={entry.command} />
            <Output text={entry.output} />
          </div>
        ))}
        
        {inputVisible && (
          <div className="flex items-center terminal-prompt">
            <input
              ref={inputRef}
              type="text"
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none flex-1 text-gray-200 caret-green-500"
              autoFocus
              aria-label="Terminal input"
            />
          </div>
        )}
      </div>
    </div>
  );
};
