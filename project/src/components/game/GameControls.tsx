import React from 'react';

interface GameControlsProps {
  onDeal: () => void;
  onFlop: () => void;
  onTurn: () => void;
  onRiver: () => void;
  hasCards: boolean;
  hasFlop: boolean;
  hasTurn: boolean;
  hasRiver: boolean;
}

const GameControls: React.FC<GameControlsProps> = ({
  onDeal,
  onFlop,
  onTurn,
  onRiver,
  hasCards,
  hasFlop,
  hasTurn,
  hasRiver,
}) => {
  return (
    <div className="absolute bottom-6 right-6 flex flex-col space-y-2">
      <button
        onClick={onDeal}
        className="px-4 py-2 bg-gradient-to-r from-red-700 to-red-900 text-white rounded shadow-lg hover:shadow-red-900/50 transition-all duration-200 border border-gold/20 flex items-center justify-center"
      >
        Deal Cards
      </button>
      
      <button
        onClick={onFlop}
        disabled={!hasCards || hasFlop}
        className={`px-4 py-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded shadow-lg transition-all duration-200 border border-gold/20 flex items-center justify-center
          ${(!hasCards || hasFlop) ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-blue-900/50'}`}
      >
        Deal Flop
      </button>
      
      <button
        onClick={onTurn}
        disabled={!hasFlop || hasTurn}
        className={`px-4 py-2 bg-gradient-to-r from-purple-700 to-purple-900 text-white rounded shadow-lg transition-all duration-200 border border-gold/20 flex items-center justify-center
          ${(!hasFlop || hasTurn) ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-purple-900/50'}`}
      >
        Deal Turn
      </button>
      
      <button
        onClick={onRiver}
        disabled={!hasTurn || hasRiver}
        className={`px-4 py-2 bg-gradient-to-r from-green-700 to-green-900 text-white rounded shadow-lg transition-all duration-200 border border-gold/20 flex items-center justify-center
          ${(!hasTurn || hasRiver) ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-green-900/50'}`}
      >
        Deal River
      </button>
    </div>
  );
};

export default GameControls;