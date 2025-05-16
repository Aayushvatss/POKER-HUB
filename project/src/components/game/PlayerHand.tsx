import React from 'react';
import { Card } from '../../contexts/PokerContext';
import PlayingCard from './PlayingCard';

interface PlayerHandProps {
  cards: Card[];
}

const PlayerHand: React.FC<PlayerHandProps> = ({ cards }) => {
  return (
    <div className="relative">
      <div className="flex gap-2">
        {cards.length > 0 ? (
          cards.map((card, index) => (
            <PlayingCard 
              key={index} 
              card={card} 
              faceUp 
              className="transform hover:-translate-y-2 transition-transform duration-200"
            />
          ))
        ) : (
          <>
            <div className="h-24 w-16 rounded-md bg-black/20 border border-gold/10"></div>
            <div className="h-24 w-16 rounded-md bg-black/20 border border-gold/10"></div>
          </>
        )}
      </div>
      <div className="mt-2 text-center">
        <span className="px-3 py-1 bg-black/50 text-white text-sm rounded-full border border-gold/20">Your Hand</span>
      </div>
    </div>
  );
};

export default PlayerHand;