import React, { createContext, useContext, useState, ReactNode } from 'react';
import { shuffleDeck, createDeck } from '../utils/cardUtils';

interface PokerContextProps {
  deck: Card[];
  playerHand: Card[];
  aiHands: Card[][];
  communityCards: Card[];
  resetGame: () => void;
  dealCards: () => void;
  dealFlop: () => void;
  dealTurn: () => void;
  dealRiver: () => void;
  clientSeed: string;
  serverSeed: string;
  generateNewSeeds: () => void;
}

interface PokerProviderProps {
  children: ReactNode;
}

export interface Card {
  suit: 'hearts' | 'diamonds' | 'clubs' | 'spades';
  value: number;
  name: string;
  dealt: boolean;
}

const PokerContext = createContext<PokerContextProps | undefined>(undefined);

export const usePoker = () => {
  const context = useContext(PokerContext);
  if (!context) {
    throw new Error('usePoker must be used within a PokerProvider');
  }
  return context;
};

export const PokerProvider: React.FC<PokerProviderProps> = ({ children }) => {
  const [deck, setDeck] = useState<Card[]>(createDeck());
  const [playerHand, setPlayerHand] = useState<Card[]>([]);
  const [aiHands, setAiHands] = useState<Card[][]>([]);
  const [communityCards, setCommunityCards] = useState<Card[]>([]);
  const [clientSeed, setClientSeed] = useState<string>(() => 
    Math.random().toString(36).substring(2, 15)
  );
  const [serverSeed, setServerSeed] = useState<string>(() => 
    Math.random().toString(36).substring(2, 15)
  );

  const resetGame = () => {
    const newDeck = createDeck();
    const shuffledDeck = shuffleDeck(newDeck, clientSeed, serverSeed);
    setDeck(shuffledDeck);
    setPlayerHand([]);
    setAiHands([]);
    setCommunityCards([]);
  };

  const dealCards = () => {
    resetGame();
    const tempDeck = [...deck];
    const newPlayerHand: Card[] = [];
    const newAiHands: Card[][] = [[], [], []]; // 3 AI opponents
    
    // Deal 2 cards to player and each AI
    for (let i = 0; i < 2; i++) {
      // Deal to player
      const playerCard = tempDeck.pop();
      if (playerCard) newPlayerHand.push(playerCard);
      
      // Deal to each AI
      for (let ai = 0; ai < 3; ai++) {
        const aiCard = tempDeck.pop();
        if (aiCard) newAiHands[ai].push(aiCard);
      }
    }
    
    setDeck(tempDeck);
    setPlayerHand(newPlayerHand);
    setAiHands(newAiHands);
  };

  const dealFlop = () => {
    // Burn a card
    const tempDeck = [...deck];
    tempDeck.pop();
    
    // Deal 3 cards for the flop
    const flop: Card[] = [];
    for (let i = 0; i < 3; i++) {
      const card = tempDeck.pop();
      if (card) flop.push(card);
    }
    
    setDeck(tempDeck);
    setCommunityCards(flop);
  };

  const dealTurn = () => {
    // Burn a card
    const tempDeck = [...deck];
    tempDeck.pop();
    
    // Deal the turn
    const card = tempDeck.pop();
    if (card) {
      setCommunityCards([...communityCards, card]);
    }
    setDeck(tempDeck);
  };

  const dealRiver = () => {
    // Burn a card
    const tempDeck = [...deck];
    tempDeck.pop();
    
    // Deal the river
    const card = tempDeck.pop();
    if (card) {
      setCommunityCards([...communityCards, card]);
    }
    setDeck(tempDeck);
  };

  const generateNewSeeds = () => {
    setClientSeed(Math.random().toString(36).substring(2, 15));
    setServerSeed(Math.random().toString(36).substring(2, 15));
  };

  return (
    <PokerContext.Provider
      value={{
        deck,
        playerHand,
        aiHands,
        communityCards,
        resetGame,
        dealCards,
        dealFlop,
        dealTurn,
        dealRiver,
        clientSeed,
        serverSeed,
        generateNewSeeds,
      }}
    >
      {children}
    </PokerContext.Provider>
  );
};