import React, { useState } from 'react';
import PokerTable from '../components/game/PokerTable';
import { usePoker } from '../contexts/PokerContext';
import { Clock, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import WhatsAppPanel from '../components/chat/WhatsAppPanel';

const PracticePage: React.FC = () => {
  const { clientSeed, serverSeed, generateNewSeeds } = usePoker();
  const [showFairness, setShowFairness] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h1 className="text-3xl font-serif font-bold text-white">Practice Room</h1>
          <p className="text-gray-400">
            Perfect your skills in our state-of-the-art digital poker room with provably fair shuffling
          </p>
        </div>
        
        <div className="mb-8">
          <PokerTable />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Timed Challenges */}
          <div className="bg-black/60 border border-gold/20 rounded-lg p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-6 w-6 text-gold" />
              <h2 className="text-xl font-bold text-white">Timed Challenges</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Improve your decision-making speed with timed exercises designed to build quick thinking under pressure.
            </p>
            <div className="space-y-3">
              {['Quick Decision (30s)', 'Intermediate (60s)', 'Pro Analysis (120s)'].map((challenge, index) => (
                <button 
                  key={index}
                  className="w-full py-2 px-4 bg-gradient-to-r from-red-900/40 to-black/40 text-white rounded border border-gold/10 hover:border-gold/30 transition-all duration-200"
                >
                  {challenge}
                </button>
              ))}
            </div>
          </div>
          
          {/* Provable Fairness */}
          <div className="bg-black/60 border border-gold/20 rounded-lg p-6 shadow-lg">
            <button 
              onClick={() => setShowFairness(!showFairness)}
              className="flex items-center gap-3 w-full mb-4"
            >
              <Shield className="h-6 w-6 text-gold" />
              <h2 className="text-xl font-bold text-white flex-1">Provable Fairness</h2>
              {showFairness ? (
                <ChevronUp className="h-5 w-5 text-gold" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gold" />
              )}
            </button>
            
            {showFairness && (
              <div className="mb-4 space-y-4">
                <p className="text-gray-300">
                  Our cards are shuffled using cryptographic algorithms to ensure perfect randomness that can be independently verified.
                </p>
                
                <div className="space-y-2">
                  <div className="flex flex-col">
                    <span className="text-xs text-gold">Client Seed:</span>
                    <code className="bg-black/60 p-2 rounded text-xs text-white break-all border border-gold/10">
                      {clientSeed}
                    </code>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-xs text-gold">Server Seed:</span>
                    <code className="bg-black/60 p-2 rounded text-xs text-white break-all border border-gold/10">
                      {serverSeed}
                    </code>
                  </div>
                </div>
                
                <button 
                  onClick={generateNewSeeds}
                  className="py-2 px-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded shadow-lg hover:shadow-blue-900/50 transition-all duration-200 border border-gold/20 text-sm"
                >
                  Generate New Seeds
                </button>
              </div>
            )}
            
            <div className="h-px bg-gold/10 my-4"></div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 py-2 px-4 bg-gradient-to-r from-green-700 to-green-900 text-white rounded shadow-lg hover:shadow-green-900/50 transition-all duration-200 border border-gold/20 text-sm">
                Play Against AI
              </button>
              <button className="flex-1 py-2 px-4 bg-gradient-to-r from-purple-700 to-purple-900 text-white rounded shadow-lg hover:shadow-purple-900/50 transition-all duration-200 border border-gold/20 text-sm">
                Solo Practice
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* WhatsApp-style chat panel */}
      <WhatsAppPanel />
    </div>
  );
};

export default PracticePage;