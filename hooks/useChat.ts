
import { useState, useCallback, useRef } from 'react';
import type { Chat } from '@google/genai';
import { ChatMessage, Author, ChatStatus } from '../types';
import { startChatSession, sendMessageToAI } from '../services/geminiService';

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [status, setStatus] = useState<ChatStatus>(ChatStatus.IDLE);
  const chatRef = useRef<Chat | null>(null);

  const startNewChat = useCallback(async (interests: string[]) => {
    setStatus(ChatStatus.SEARCHING);
    setMessages([]);
    
    // Simulate searching for a partner
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));

    try {
      chatRef.current = startChatSession(interests);
      setMessages([
        { id: Date.now().toString(), author: Author.SYSTEM, text: 'You are now connected with a stranger. Say hi!' }
      ]);
      setStatus(ChatStatus.CONNECTED);
    } catch (error) {
      console.error("Failed to start chat session:", error);
      setStatus(ChatStatus.ERROR);
      setMessages([
        { id: Date.now().toString(), author: Author.SYSTEM, text: 'Could not connect. Please try again later.' }
      ]);
    }
  }, []);

  const sendMessage = useCallback(async (text: string) => {
    if (!chatRef.current || status !== ChatStatus.CONNECTED) return;

    const userMessage: ChatMessage = { id: `${Date.now()}-user`, author: Author.USER, text };
    setMessages(prev => [...prev, userMessage]);

    const strangerTypingMessage: ChatMessage = { id: `${Date.now()}-typing`, author: Author.STRANGER, text: '...' };
    setMessages(prev => [...prev, strangerTypingMessage]);
    
    const responseText = await sendMessageToAI(chatRef.current, text);

    const strangerMessage: ChatMessage = { id: Date.now().toString(), author: Author.STRANGER, text: responseText };
    setMessages(prev => prev.filter(m => m.id !== `${Date.now()}-typing`).slice(0, -1).concat(userMessage, strangerMessage));

  }, [status]);
  
  const endChat = useCallback(() => {
    setStatus(ChatStatus.DISCONNECTED);
    setMessages(prev => [...prev, { id: Date.now().toString(), author: Author.SYSTEM, text: 'You have disconnected.' }]);
    chatRef.current = null;
    
    // Reset to idle after a delay to allow user to start a new chat
    setTimeout(() => {
        setStatus(ChatStatus.IDLE);
        setMessages([]);
    }, 2000);

  }, []);

  return { messages, status, startNewChat, sendMessage, endChat };
};
