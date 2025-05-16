import React, { useState } from 'react';
import HandGuide from '../components/learning/HandGuide';
import StrategyGuide from '../components/learning/StrategyGuide';
import WhatsAppPanel from '../components/chat/WhatsAppPanel';
import { BookOpen, TrendingUp } from 'lucide-react';

const LearningHubPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hands' | 'strategy'>('hands');
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h1 className="text-3xl font-serif font-bold text-white">Learning Hub</h1>
          <p className="text-gray-400">
            Master the game with our comprehensive guides, tips, and tutorials
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-gold/20 mb-6">
          <button
            className={`py-3 px-6 font-medium ${
              activeTab === 'hands'
                ? 'text-gold border-b-2 border-gold'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('hands')}
          >
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Hand Rankings</span>
            </div>
          </button>
          
          <button
            className={`py-3 px-6 font-medium ${
              activeTab === 'strategy'
                ? 'text-gold border-b-2 border-gold'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('strategy')}
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span>Strategy Guide</span>
            </div>
          </button>
        </div>
        
        {/* Content */}
        <div className="mb-12">
          {activeTab === 'hands' && <HandGuide />}
          {activeTab === 'strategy' && <StrategyGuide />}
        </div>
        
        {/* Resources Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-white mb-6">Additional Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Poker Mathematics",
                description: "Learn how to calculate odds, expected value, and make mathematically correct decisions.",
                image: "https://images.pexels.com/photos/7594061/pexels-photo-7594061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                title: "Reading Opponents",
                description: "Develop your ability to spot tells and interpret betting patterns for better decisions.",
                image: "https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                title: "Tournament Strategy",
                description: "Special considerations for tournament play including stack sizes and bubble dynamics.",
                image: "https://images.pexels.com/photos/1871508/pexels-photo-1871508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((resource, index) => (
              <div key={index} className="bg-black/60 border border-gold/20 rounded-lg overflow-hidden shadow-lg hover:border-gold/40 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-400 mb-4">{resource.description}</p>
                  <button className="px-4 py-2 bg-gradient-to-r from-red-700 to-red-900 text-white rounded-md shadow-md hover:shadow-red-900/50 transition-all duration-200 text-sm border border-gold/20">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* WhatsApp-style chat panel */}
      <WhatsAppPanel />
    </div>
  );
};

export default LearningHubPage;