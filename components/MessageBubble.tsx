
import React from 'react';
import { ChatMessage, Author } from '../types';

interface MessageBubbleProps {
  message: ChatMessage;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const { author, text } = message;

  if (author === Author.SYSTEM) {
    return (
      <div className="text-center my-2">
        <span className="text-sm text-gray-500 italic px-4 py-1">{text}</span>
      </div>
    );
  }

  const isUser = author === Author.USER;
  const alignment = isUser ? 'justify-end' : 'justify-start';
  const bubbleColor = isUser ? 'bg-indigo-600' : 'bg-gray-700';
  const bubbleClasses = `max-w-md lg:max-w-lg px-4 py-2 rounded-xl ${bubbleColor}`;

  return (
    <div className={`flex ${alignment}`}>
      <div className={bubbleClasses}>
        <p className="text-white">{text}</p>
      </div>
    </div>
  );
};

export default MessageBubble;
