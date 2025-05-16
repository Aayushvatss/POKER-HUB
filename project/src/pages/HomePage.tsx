import React from 'react';
import { Link } from 'react-router-dom';
import { Play, BookOpen, MessageSquare, Shield } from 'lucide-react';
import WhatsAppPanel from '../components/chat/WhatsAppPanel';

const HomePage: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1871508/pexels-photo-1871508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
        </div>
        
        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
            Master the Art of 
            <span className="bg-gradient-to-r from-red-600 to-gold text-transparent bg-clip-text"> Poker</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Practice with our provably fair cards, learn winning strategies, and elevate your poker skills.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/practice" className="px-8 py-3 bg-gradient-to-r from-red-700 to-red-900 text-white rounded-lg shadow-lg shadow-red-900/30 hover:shadow-red-900/50 transition-all duration-200 text-lg flex items-center">
              <Play className="mr-2 h-5 w-5" />
              Play Now
            </Link>
            
            <Link to="/learning-hub" className="px-8 py-3 bg-black/70 border border-gold/30 text-white rounded-lg shadow-lg hover:bg-black/90 transition-all duration-200 text-lg flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              Learn Poker
            </Link>
          </div>
        </div>
        
        {/* Card decorations */}
        <div className="absolute -bottom-8 -left-16 h-64 w-40 bg-white rounded-lg transform rotate-12 shadow-xl opacity-40 hidden lg:block"></div>
        <div className="absolute -bottom-12 -right-8 h-64 w-40 bg-white rounded-lg transform -rotate-12 shadow-xl opacity-40 hidden lg:block"></div>
      </div>
      
      {/* Features Section */}
      <div className="bg-black py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 bg-gradient-to-r from-white to-gold text-transparent bg-clip-text">
            Why Players Choose Ace High
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/40 border border-gold/20 rounded-lg p-6 shadow-lg hover:border-gold/40 transition-all duration-300">
              <div className="bg-gradient-to-br from-red-700 to-red-900 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Play className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Realistic Practice</h3>
              <p className="text-gray-400">
                Practice in our solo mode or against AI opponents with realistic betting patterns and strategy.
              </p>
            </div>
            
            <div className="bg-black/40 border border-gold/20 rounded-lg p-6 shadow-lg hover:border-gold/40 transition-all duration-300">
              <div className="bg-gradient-to-br from-red-700 to-red-900 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Provably Fair</h3>
              <p className="text-gray-400">
                Our cryptographic shuffling algorithm ensures perfect randomness in every deal that you can verify.
              </p>
            </div>
            
            <div className="bg-black/40 border border-gold/20 rounded-lg p-6 shadow-lg hover:border-gold/40 transition-all duration-300">
              <div className="bg-gradient-to-br from-red-700 to-red-900 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Learn & Improve</h3>
              <p className="text-gray-400">
                Our comprehensive guides and tips help you understand hand rankings, odds, and winning strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Learning Section */}
      <div className="bg-gradient-to-b from-black to-red-900/30 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-3xl font-serif font-bold mb-4 text-white">
                Become a Better Poker Player
              </h2>
              <p className="text-gray-300 mb-6">
                Our learning center provides comprehensive guides to hand rankings, odds calculation, and advanced strategies used by professional players.
              </p>
              <ul className="space-y-3">
                {[
                  'Master hand rankings and probabilities',
                  'Learn to calculate odds in real-time',
                  'Understand position and table dynamics',
                  'Develop a winning bankroll strategy'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-red-700 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/learning-hub" className="inline-block mt-8 px-6 py-2 bg-gradient-to-r from-red-700 to-red-900 text-white rounded shadow-lg hover:shadow-red-900/50 transition-all duration-200 border border-gold/20">
                Explore Learning Hub
              </Link>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="relative p-3 border-2 border-gold/30 rounded-lg shadow-lg bg-black/40">
                <img
                  src="https://images.pexels.com/photos/3377048/pexels-photo-3377048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Poker player thinking"
                  className="rounded w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <span className="text-sm text-gold">Learn from the pros</span>
                </div>
              </div>
              
              {/* Decorative cards */}
              <div className="absolute -top-4 -right-4 h-24 w-16 bg-white rounded-md transform rotate-12 shadow-md z-10"></div>
              <div className="absolute -bottom-4 -left-4 h-24 w-16 bg-white rounded-md transform -rotate-12 shadow-md z-10"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-black py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6 text-white">
            Ready to Test Your Skills?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of players who practice and improve their poker game every day using our platform.
          </p>
          <Link to="/practice" className="px-8 py-3 bg-gradient-to-r from-red-700 to-red-900 text-white rounded-lg shadow-lg hover:shadow-red-900/50 transition-all duration-200 text-lg inline-block">
            Start Playing Now
          </Link>
        </div>
      </div>
      
      {/* WhatsApp-style chat panel */}
      <WhatsAppPanel />
    </div>
  );
};

export default HomePage;