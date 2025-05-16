import React from 'react';
import { Card } from '../../contexts/PokerContext';
import PlayingCard from './PlayingCard';

interface OpponentHandProps {
  cards: Card[];
  position: number; // 0 = left, 1 = center, 2 = right
}

const OpponentHand: React.FC<OpponentHandProps> = ({ cards, position }) => {
  const positionNames = ['Left Opponent', 'Center Opponent', 'Right Opponent'];
  
  return (
    <div className="relative">
      <div className="flex gap-1">
        {cards.length > 0 ? (
          cards.map((card, index) => (
            <PlayingCard 
              key={index} 
              card={card} 
              faceUp={false} 
              className="transform hover:-translate-y-1 transition-transform duration-200"
            />
          ))
        ) : (
          <>
            <div className="h-20 w-14 rounded-md bg-black/20 border border-gold/10"></div>
            <div className="h-20 w-14 rounded-md bg-black/20 border border-gold/10"></div>
          </>
        )}
      </div>
      <div className="mt-2 text-center">
        <span className="px-3 py-1 bg-black/50 text-white text-xs rounded-full border border-gold/20">
          {positionNames[position]}
        </span>
      </div>
    </div>
  );
};

export default OpponentHand;