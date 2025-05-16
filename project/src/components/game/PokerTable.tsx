import React, { useState, useEffect } from 'react';
import { usePoker } from '../../contexts/PokerContext';
import PlayingCard from './PlayingCard';
import OpponentHand from './OpponentHand';
import PlayerHand from './PlayerHand';
import GameControls from './GameControls';
import BettingControls from './BettingControls';
import HandVisualizer from './HandVisualizer';
import { evaluateHand, calculateWinProbability } from '../../utils/cardUtils';

const PokerTable: React.FC = () => {
  const { playerHand, aiHands, communityCards, dealCards, dealFlop, dealTurn, dealRiver } = usePoker();
  const [currentBet, setCurrentBet] = useState(0);
  const [handRank, setHandRank] = useState('');
  const [winProbability, setWinProbability] = useState(0);
  
  const hasPlayerCards = playerHand.length > 0;
  const hasFlop = communityCards.length >= 3;
  const hasTurn = communityCards.length >= 4;
  const hasRiver = communityCards.length >= 5;

  useEffect(() => {
    if (playerHand.length > 0) {
      const rank = evaluateHand(playerHand, communityCards);
      const probability = calculateWinProbability(playerHand, communityCards);
      setHandRank(rank);
      setWinProbability(probability);
    }
  }, [playerHand, communityCards]);

  const handleBet = (amount: number) => {
    setCurrentBet(amount);
    // AI logic for responding to bets would go here
  };

  return (
    <div className="relative w-full max-w-7xl h-[700px] mx-auto bg-green-900 rounded-[40px] border-8 border-brown-800 shadow-2xl p-8 overflow-hidden">
      {/* Felt texture overlay */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/247040/pexels-photo-247040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-30 mix-blend-overlay rounded-3xl"></div>
      
      {/* Table stitching */}
      <div className="absolute inset-0 rounded-3xl border-4 border-dashed border-gold/20 m-4 pointer-events-none"></div>
      
      {/* Hand visualizer */}
      {hasPlayerCards && (
        <HandVisualizer
          cards={[...playerHand, ...communityCards]}
          handRank={handRank}
          winProbability={winProbability}
        />
      )}
      
      {/* Opponents */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 flex justify-center space-x-32">
        {aiHands.map((hand, index) => (
          <OpponentHand key={index} cards={hand} position={index} />
        ))}
      </div>
      
      {/* Community cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center gap-3">
        {hasFlop ? (
          <>
            <PlayingCard card={communityCards[0]} faceUp className="transform hover:scale-105" />
            <PlayingCard card={communityCards[1]} faceUp className="transform hover:scale-105" />
            <PlayingCard card={communityCards[2]} faceUp className="transform hover:scale-105" />
            {hasTurn && <PlayingCard card={communityCards[3]} faceUp className="transform hover:scale-105" />}
            {hasRiver && <PlayingCard card={communityCards[4]} faceUp className="transform hover:scale-105" />}
          </>
        ) : (
          <div className="h-32 w-96 rounded-lg bg-gold/5 border border-gold/10 flex items-center justify-center text-gold/50 text-lg font-medium">
            Community Cards
          </div>
        )}
      </div>
      
      {/* Current bet display */}
      {currentBet > 0 && (
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
          <div className="bg-black/80 rounded-lg border border-gold/20 p-4">
            <span className="text-gold text-sm">Current Bet</span>
            <div className="text-white font-medium text-lg">{currentBet} chips</div>
          </div>
        </div>
      )}
      
      {/* Player hand */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <PlayerHand cards={playerHand} />
      </div>
      
      {/* Betting controls */}
      <BettingControls
        onBet={handleBet}
        disabled={!hasPlayerCards || hasRiver}
      />
      
      {/* Game controls */}
      <GameControls
        onDeal={dealCards}
        onFlop={dealFlop}
        onTurn={dealTurn}
        onRiver={dealRiver}
        hasCards={hasPlayerCards}
        hasFlop={hasFlop}
        hasTurn={hasTurn}
        hasRiver={hasRiver}
      />
    </div>
  );
};

export default PokerTable;