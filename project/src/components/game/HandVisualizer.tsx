import React from 'react';
import { Card } from '../../contexts/PokerContext';
import PlayingCard from './PlayingCard';

interface HandVisualizerProps {
  cards: Card[];
  handRank: string;
  winProbability: number;
}

const HandVisualizer: React.FC<HandVisualizerProps> = ({ cards, handRank, winProbability }) => {
  return (
    <div className="absolute top-6 left-6 bg-black/80 rounded-lg border border-gold/20 p-4 shadow-lg">
      <h3 className="text-gold font-medium mb-2">Hand Analysis</h3>
      
      <div className="flex gap-2 mb-4">
        {cards.map((card, index) => (
          <PlayingCard key={index} card={card} faceUp className="transform scale-75" />
        ))}
      </div>
      
      <div className="space-y-2">
        <div>
          <span className="text-gray-400 text-sm">Current Hand:</span>
          <span className="text-white ml-2">{handRank}</span>
        </div>
        
        <div>
          <span className="text-gray-400 text-sm">Win Probability:</span>
          <div className="w-full h-2 bg-gray-700 rounded-full mt-1">
            <div
              className="h-full bg-gradient-to-r from-red-600 to-red-800 rounded-full"
              style={{ width: `${winProbability * 100}%` }}
            />
          </div>
          <span className="text-white text-xs">{(winProbability * 100).toFixed(1)}%</span>
        </div>
      </div>
    </div>
  );
};

export default HandVisualizer;