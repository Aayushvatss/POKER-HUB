import React from 'react';
import { Card } from '../../contexts/PokerContext';

interface PlayingCardProps {
  card?: Card;
  faceUp?: boolean;
  className?: string;
}

const PlayingCard: React.FC<PlayingCardProps> = ({ card, faceUp = false, className = '' }) => {
  if (!card) {
    return (
      <div className={`h-24 w-16 rounded-md bg-blue-900 border border-gold/20 shadow-md ${className}`}></div>
    );
  }
  
  const { suit, name } = card;
  
  const isRed = suit === 'hearts' || suit === 'diamonds';
  const textColor = isRed ? 'text-red-600' : 'text-black';
  
  const suitSymbol = {
    hearts: '♥',
    diamonds: '♦',
    clubs: '♣',
    spades: '♠'
  }[suit];
  
  if (!faceUp) {
    return (
      <div className={`relative h-24 w-16 rounded-md bg-gradient-to-br from-blue-900 to-blue-800 border border-gold/20 shadow-md flex items-center justify-center ${className} hover:shadow-gold/20 transition-all duration-200`}>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2911527/pexels-photo-2911527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-40 bg-center bg-no-repeat bg-cover rounded-md"></div>
        <div className="w-10 h-14 rounded-sm border border-gold/30 bg-gradient-to-br from-red-900/20 to-red-800/20"></div>
      </div>
    );
  }
  
  return (
    <div className={`relative h-24 w-16 rounded-md bg-white border border-gray-200 shadow-md ${className} hover:shadow-gold/20 transition-all duration-200`}>
      <div className="absolute top-1 left-1 flex flex-col items-center">
        <span className={`text-sm font-bold ${textColor}`}>{name}</span>
        <span className={`text-sm ${textColor}`}>{suitSymbol}</span>
      </div>
      
      <div className="absolute bottom-1 right-1 flex flex-col items-center rotate-180">
        <span className={`text-sm font-bold ${textColor}`}>{name}</span>
        <span className={`text-sm ${textColor}`}>{suitSymbol}</span>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-3xl ${textColor}`}>{suitSymbol}</span>
      </div>
    </div>
  );
};

export default PlayingCard;