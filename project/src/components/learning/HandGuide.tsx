import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { getHandDescription } from '../../utils/cardUtils';
import PlayingCard from '../game/PlayingCard';

const pokerHands = [
  { name: 'Royal Flush', probability: '0.000154%', example: [
    { suit: 'hearts', value: 14, name: 'A' },
    { suit: 'hearts', value: 13, name: 'K' },
    { suit: 'hearts', value: 12, name: 'Q' },
    { suit: 'hearts', value: 11, name: 'J' },
    { suit: 'hearts', value: 10, name: '10' }
  ]},
  { name: 'Straight Flush', probability: '0.00139%', example: [
    { suit: 'spades', value: 9, name: '9' },
    { suit: 'spades', value: 8, name: '8' },
    { suit: 'spades', value: 7, name: '7' },
    { suit: 'spades', value: 6, name: '6' },
    { suit: 'spades', value: 5, name: '5' }
  ]},
  { name: 'Four of a Kind', probability: '0.0240%', example: [
    { suit: 'hearts', value: 8, name: '8' },
    { suit: 'diamonds', value: 8, name: '8' },
    { suit: 'clubs', value: 8, name: '8' },
    { suit: 'spades', value: 8, name: '8' },
    { suit: 'hearts', value: 13, name: 'K' }
  ]},
  { name: 'Full House', probability: '0.1441%', example: [
    { suit: 'hearts', value: 7, name: '7' },
    { suit: 'diamonds', value: 7, name: '7' },
    { suit: 'clubs', value: 7, name: '7' },
    { suit: 'spades', value: 4, name: '4' },
    { suit: 'hearts', value: 4, name: '4' }
  ]},
  { name: 'Flush', probability: '0.1965%', example: [
    { suit: 'diamonds', value: 14, name: 'A' },
    { suit: 'diamonds', value: 10, name: '10' },
    { suit: 'diamonds', value: 8, name: '8' },
    { suit: 'diamonds', value: 6, name: '6' },
    { suit: 'diamonds', value: 3, name: '3' }
  ]},
  { name: 'Straight', probability: '0.3925%', example: [
    { suit: 'hearts', value: 9, name: '9' },
    { suit: 'diamonds', value: 8, name: '8' },
    { suit: 'clubs', value: 7, name: '7' },
    { suit: 'spades', value: 6, name: '6' },
    { suit: 'hearts', value: 5, name: '5' }
  ]},
  { name: 'Three of a Kind', probability: '2.1128%', example: [
    { suit: 'hearts', value: 6, name: '6' },
    { suit: 'diamonds', value: 6, name: '6' },
    { suit: 'clubs', value: 6, name: '6' },
    { suit: 'spades', value: 13, name: 'K' },
    { suit: 'hearts', value: 10, name: '10' }
  ]},
  { name: 'Two Pair', probability: '4.7539%', example: [
    { suit: 'hearts', value: 9, name: '9' },
    { suit: 'diamonds', value: 9, name: '9' },
    { suit: 'clubs', value: 5, name: '5' },
    { suit: 'spades', value: 5, name: '5' },
    { suit: 'hearts', value: 13, name: 'K' }
  ]},
  { name: 'Pair', probability: '42.2569%', example: [
    { suit: 'hearts', value: 10, name: '10' },
    { suit: 'diamonds', value: 10, name: '10' },
    { suit: 'clubs', value: 14, name: 'A' },
    { suit: 'spades', value: 8, name: '8' },
    { suit: 'hearts', value: 4, name: '4' }
  ]},
  { name: 'High Card', probability: '50.1177%', example: [
    { suit: 'hearts', value: 14, name: 'A' },
    { suit: 'diamonds', value: 10, name: '10' },
    { suit: 'clubs', value: 8, name: '8' },
    { suit: 'spades', value: 5, name: '5' },
    { suit: 'hearts', value: 2, name: '2' }
  ]},
];

const HandGuide: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHand, setSelectedHand] = useState('Royal Flush');
  
  const filteredHands = pokerHands.filter(hand => 
    hand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const selectedHandData = pokerHands.find(hand => hand.name === selectedHand);
  
  return (
    <div className="bg-black/90 rounded-lg border border-gold/20 shadow-lg overflow-hidden">
      <div className="p-4 border-b border-gold/20 bg-gradient-to-r from-black to-red-900/30">
        <h2 className="text-xl font-serif text-gold">Poker Hand Rankings</h2>
        <p className="text-sm text-gray-400">Learn all possible poker hand combinations and their probabilities</p>
      </div>
      
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 p-4 border-r border-gold/10">
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Search hands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-black/50 border border-gold/20 rounded py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gold/30"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          </div>
          
          <div className="space-y-2 max-h-96 overflow-y-auto custom-scrollbar">
            {filteredHands.map((hand) => (
              <button
                key={hand.name}
                onClick={() => setSelectedHand(hand.name)}
                className={`w-full text-left px-3 py-2 rounded ${
                  selectedHand === hand.name
                    ? 'bg-red-900/30 border-l-2 border-gold'
                    : 'hover:bg-black/30'
                }`}
              >
                <div className="font-medium text-white">{hand.name}</div>
                <div className="text-sm text-gray-400">Probability: {hand.probability}</div>
              </button>
            ))}
          </div>
        </div>
        
        <div className="w-full md:w-2/3 p-6">
          {selectedHandData && (
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-white">{selectedHandData.name}</h3>
              
              <div className="text-gray-300">
                <p className="mb-2">{getHandDescription(selectedHandData.name)}</p>
                
                <div className="mt-4 p-4 bg-black/40 border border-gold/10 rounded">
                  <h4 className="text-gold text-sm font-medium mb-2">Probability</h4>
                  <p className="text-white">{selectedHandData.probability}</p>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-gold text-sm font-medium mb-2">Tips</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>When to hold or fold this hand</li>
                    <li>Position considerations</li>
                    <li>Betting strategies</li>
                  </ul>
                </div>
              </div>
              
              {/* Hand visualization */}
              <div className="mt-6 p-4 bg-green-900/20 rounded-lg border border-gold/10">
                <h4 className="text-gold text-sm font-medium mb-3">Example Hand</h4>
                <div className="flex gap-2 justify-center">
                  {selectedHandData.example.map((card, index) => (
                    <PlayingCard key={index} card={card} faceUp />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HandGuide;