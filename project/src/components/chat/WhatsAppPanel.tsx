import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

interface Message {
  id: number;
  content: string;
  type: 'incoming' | 'outgoing';
  time: string;
}

const predefinedQuestions = [
  "What's the difference between a straight and a flush?",
  "How do I calculate pot odds?",
  "What's the best starting hand in Texas Hold'em?",
  "When should I bluff?"
];

const pokerTips = [
  "Tip: Be observant of your opponents' betting patterns",
  "Challenge: Try to play a full game without looking at your cards until the showdown",
  "Tip: Position is power in poker - play more hands in late position",
  "Challenge: Practice calculating pot odds for 15 minutes today",
  "Tip: Remember, it's easier to play good cards than to play bad cards well"
];

const WhatsAppPanel: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "👋 Welcome to Ace High Poker Bot! I'm here to help you improve your poker skills. Ask me anything about poker strategy or try one of the quick questions below.",
      type: 'incoming',
      time: formatTime(new Date())
    }
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (messages.length > 0 && messages.length < 10 && Math.random() > 0.7) {
        const randomTip = pokerTips[Math.floor(Math.random() * pokerTips.length)];
        addMessage(randomTip, 'incoming');
      }
    }, 20000);
    
    return () => clearInterval(interval);
  }, [messages]);
  
  function formatTime(date: Date): string {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const addMessage = (content: string, type: 'incoming' | 'outgoing') => {
    const newMessage: Message = {
      id: messages.length + 1,
      content,
      type,
      time: formatTime(new Date())
    };
    
    setMessages([...messages, newMessage]);
  };
  
  const handleSend = () => {
    if (input.trim()) {
      addMessage(input, 'outgoing');
      setInput('');
      
      // Simulate bot response
      setTimeout(() => {
        let response = "I'm processing your question about poker. Let me think about that...";
        
        if (input.toLowerCase().includes('royal flush')) {
          response = "A Royal Flush is the best possible hand in poker. It consists of A-K-Q-J-10 all of the same suit.";
        } else if (input.toLowerCase().includes('bluff')) {
          response = "Bluffing is an essential part of poker, but should be done selectively. The best times to bluff are when the board favors your perceived range and against opponents who can fold.";
        } else if (input.toLowerCase().includes('odds')) {
          response = "To calculate pot odds, divide the current pot size by the cost of your call. If your odds of winning are better than the pot odds, it's mathematically correct to call.";
        }
        
        addMessage(response, 'incoming');
      }, 1000);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  
  const handleQuickQuestion = (question: string) => {
    addMessage(question, 'outgoing');
    
    // Simulate bot response
    setTimeout(() => {
      let response = "";
      
      if (question.includes('straight and a flush')) {
        response = "A straight is five cards in sequential order of different suits (e.g., 5♠ 6♥ 7♦ 8♣ 9♠). A flush is five cards of the same suit, not in sequence (e.g., 2♥ 5♥ 7♥ 10♥ K♥). A flush beats a straight.";
      } else if (question.includes('pot odds')) {
        response = "Pot odds are calculated by dividing the current pot size by the cost of your call. Example: If the pot is $100 and you need to call $20, your pot odds are 5:1. If your chance of winning is better than 1 in 6, you should call.";
      } else if (question.includes('best starting hand')) {
        response = "The best starting hand in Texas Hold'em is pocket Aces (A♠A♥). This gives you the highest pair possible and around an 85% chance against any single random hand.";
      } else if (question.includes('bluff')) {
        response = "You should bluff when: 1) The board favors your perceived range, 2) Your opponent has shown weakness, 3) There are few players in the hand, and 4) Your table image supports it. Bluff against players who can fold good hands, not calling stations.";
      }
      
      addMessage(response, 'incoming');
    }, 1000);
  };
  
  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg z-50 transition-all duration-300
          ${isOpen 
            ? 'bg-red-600 hover:bg-red-700' 
            : 'bg-gradient-to-r from-red-600 to-red-800 hover:shadow-red-500/30'}`}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageSquare className="h-6 w-6 text-white" />
        )}
      </button>
      
      {/* Chat panel */}
      <div 
        className={`fixed bottom-24 right-6 w-80 h-96 bg-gray-100 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 transform z-40
          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-red-700 to-red-900 p-3 text-white">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-red-800 flex items-center justify-center">
              <MessageSquare className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-medium">Poker Coach</h3>
              <p className="text-xs text-white/80">Online | Daily tips & challenges</p>
            </div>
          </div>
        </div>
        
        {/* Messages */}
        <div className="h-[calc(100%-120px)] bg-[url('https://i.pinimg.com/736x/85/ec/df/85ecdf1c3611ecc9b7fa85282d9526e0.jpg')] bg-cover overflow-y-auto p-3 space-y-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`max-w-[80%] p-2 rounded-lg ${
                message.type === 'incoming'
                  ? 'bg-white text-black ml-0 rounded-tl-none'
                  : 'bg-green-100 text-black ml-auto rounded-tr-none'
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <p className="text-right text-xs text-gray-500 mt-1">{message.time}</p>
            </div>
          ))}
        </div>
        
        {/* Quick questions */}
        <div className="bg-gray-50 p-2 overflow-x-auto whitespace-nowrap border-t border-gray-200">
          <div className="flex space-x-2">
            {predefinedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuickQuestion(question)}
                className="px-3 py-1 bg-white text-xs text-gray-700 rounded-full border border-gray-300 hover:bg-gray-100 whitespace-nowrap"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
        
        {/* Input */}
        <div className="bg-gray-50 p-2 flex items-center border-t border-gray-200">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-1 py-2 px-3 bg-white rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 text-sm"
          />
          <button 
            onClick={handleSend}
            className="ml-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </>
  );
};

export default WhatsAppPanel;