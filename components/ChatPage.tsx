
import React, { useState } from 'react';
import { useChat } from '../hooks/useChat';
import { ChatStatus } from '../types';
import ChatWindow from './ChatWindow';

const InterestInput: React.FC<{ onStartChat: (interests: string[]) => void }> = ({ onStartChat }) => {
  const [interestText, setInterestText] = useState('');
  const popularInterests = ['music', 'movies', 'gaming', 'travel', 'art', 'sports', 'books', 'tech'];

  const handleStart = () => {
    const interests = interestText.split(',').map(i => i.trim()).filter(Boolean);
    if (interests.length === 0) {
        interests.push('anything');
    }
    onStartChat(interests);
  };
  
  const addInterest = (interest: string) => {
    const interests = new Set(interestText.split(',').map(i => i.trim()).filter(Boolean));
    interests.add(interest);
    setInterestText(Array.from(interests).join(', '));
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 text-center">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-2 text-indigo-400">What do you want to talk about?</h2>
        <p className="text-gray-400 mb-6">Enter some interests to find someone to talk to. Separate them with commas.</p>
        <textarea
          className="w-full bg-gray-700 text-white p-3 rounded-lg border-2 border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 transition duration-200 resize-none"
          rows={3}
          placeholder="e.g., photography, hiking, react..."
          value={interestText}
          onChange={(e) => setInterestText(e.target.value)}
        />
        <div className="flex flex-wrap gap-2 my-4 justify-center">
            {popularInterests.map(interest => (
                <button key={interest} onClick={() => addInterest(interest)} className="bg-gray-700 hover:bg-indigo-600 text-sm px-3 py-1 rounded-full transition-colors">
                    + {interest}
                </button>
            ))}
        </div>
        <button
          onClick={handleStart}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105"
        >
          Start Chat
        </button>
      </div>
    </div>
  );
};


const LoadingChat: React.FC<{ status: ChatStatus }> = ({ status }) => (
  <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 animate-spin border-t-indigo-500"></div>
      <h2 className="text-2xl font-semibold text-gray-300">Searching for a stranger...</h2>
      <p className="text-gray-500">Please wait while we connect you.</p>
  </div>
);


const ChatPage: React.FC = () => {
  const { messages, status, startNewChat, sendMessage, endChat } = useChat();
  
  const renderContent = () => {
    switch (status) {
      case ChatStatus.IDLE:
      case ChatStatus.DISCONNECTED:
      case ChatStatus.ERROR:
        return <InterestInput onStartChat={startNewChat} />;
      case ChatStatus.SEARCHING:
        return <LoadingChat status={status} />;
      case ChatStatus.CONNECTED:
        return <ChatWindow messages={messages} onSendMessage={sendMessage} onEndChat={endChat} />;
      default:
        return <InterestInput onStartChat={startNewChat} />;
    }
  };

  return <div className="h-full">{renderContent()}</div>;
};

export default ChatPage;
