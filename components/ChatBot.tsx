
import React, { useState, useRef, useEffect } from 'react';
import { getAssistantResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hi! I'm the Anantha Software assistant. How can I help you today? Whether you're interested in web development, mobile apps, or digital marketing, I'm here to provide details!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    const response = await getAssistantResponse(userMessage, messages.map(m => ({ role: m.role, content: m.content })));
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {isOpen ? (
        <div className="bg-white rounded-3xl shadow-2xl w-[350px] sm:w-[400px] h-[500px] flex flex-col border border-gray-100 overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold">Anantha AI</h4>
                <p className="text-xs opacity-75">Online | Powered by Gemini</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-white text-gray-700 rounded-bl-none border border-gray-100'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-gray-100 flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100 flex items-center space-x-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-grow px-4 py-3 rounded-xl bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-sm"
            />
            <button
              onClick={handleSend}
              className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 active:scale-95 transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-300 group"
        >
          <div className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-pulse">
            AI HELP
          </div>
          <svg className="w-8 h-8 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ChatBot;
