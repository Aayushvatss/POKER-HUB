import { Card } from '../contexts/PokerContext';
import crypto from 'crypto-js';

// Create a standard deck of 52 cards
export const createDeck = (): Card[] => {
  const suits: Array<'hearts' | 'diamonds' | 'clubs' | 'spades'> = ['hearts', 'diamonds', 'clubs', 'spades'];
  const deck: Card[] = [];
  
  suits.forEach(suit => {
    // Cards 2-10, Jack (11), Queen (12), King (13), Ace (14)
    for (let value = 2; value <= 14; value++) {
      let name;
      
      if (value <= 10) {
        name = value.toString();
      } else if (value === 11) {
        name = 'J';
      } else if (value === 12) {
        name = 'Q';
      } else if (value === 13) {
        name = 'K';
      } else {
        name = 'A';
      }
      
      deck.push({
        suit,
        value,
        name,
        dealt: false
      });
    }
  });
  
  return deck;
};

// Shuffle the deck using crypto for fairness
export const shuffleDeck = (deck: Card[], clientSeed: string, serverSeed: string): Card[] => {
  const combinedSeed = `${clientSeed}-${serverSeed}`;
  const shuffledDeck = [...deck];
  
  // Fisher-Yates shuffle with crypto-based randomness
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    // Generate deterministic random number using the seeds and current index
    const hash = crypto.SHA256(`${combinedSeed}-${i}`).toString();
    
    // Convert first 8 characters of hash to a number between 0 and 1
    const randomValue = parseInt(hash.substring(0, 8), 16) / 0xffffffff;
    
    // Use this to select a random index
    const j = Math.floor(randomValue * (i + 1));
    
    // Swap elements
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }
  
  return shuffledDeck;
};

// Evaluate a hand (player or AI) with community cards
export const evaluateHand = (hand: Card[], communityCards: Card[]): string => {
  const allCards = [...hand, ...communityCards];
  
  // Hand evaluation would go here
  // This is a simplified placeholder - a real implementation would check for all poker hands
  if (hasRoyalFlush(allCards)) return 'Royal Flush';
  if (hasStraightFlush(allCards)) return 'Straight Flush';
  if (hasFourOfAKind(allCards)) return 'Four of a Kind';
  if (hasFullHouse(allCards)) return 'Full House';
  if (hasFlush(allCards)) return 'Flush';
  if (hasStraight(allCards)) return 'Straight';
  if (hasThreeOfAKind(allCards)) return 'Three of a Kind';
  if (hasTwoPair(allCards)) return 'Two Pair';
  if (hasPair(allCards)) return 'Pair';
  
  return 'High Card';
};

// These are placeholders for hand evaluation functions
// In a complete implementation, these would have the logic to evaluate the hands
const hasRoyalFlush = (cards: Card[]): boolean => false;
const hasStraightFlush = (cards: Card[]): boolean => false;
const hasFourOfAKind = (cards: Card[]): boolean => false;
const hasFullHouse = (cards: Card[]): boolean => false;
const hasFlush = (cards: Card[]): boolean => false;
const hasStraight = (cards: Card[]): boolean => false;
const hasThreeOfAKind = (cards: Card[]): boolean => false;
const hasTwoPair = (cards: Card[]): boolean => false;
const hasPair = (cards: Card[]): boolean => false;

// Function to get a description of a poker hand
export const getHandDescription = (handType: string): string => {
  const descriptions: Record<string, string> = {
    'Royal Flush': 'A, K, Q, J, 10, all of the same suit',
    'Straight Flush': 'Five cards in sequence, all of the same suit',
    'Four of a Kind': 'Four cards of the same rank',
    'Full House': 'Three of a kind with a pair',
    'Flush': 'Any five cards of the same suit, not in sequence',
    'Straight': 'Five cards in sequence, not of the same suit',
    'Three of a Kind': 'Three cards of the same rank',
    'Two Pair': 'Two different pairs',
    'Pair': 'Two cards of the same rank',
    'High Card': 'When you haven\'t made any of the hands above'
  };
  
  return descriptions[handType] || 'Unknown hand type';
};

// Calculate win probability based on current hand and community cards
export const calculateWinProbability = (playerHand: Card[], communityCards: Card[]): number => {
  // This is a simplified probability calculation
  // In a real implementation, you would:
  // 1. Calculate possible opponent hands
  // 2. Run Monte Carlo simulations
  // 3. Consider remaining deck composition
  // 4. Factor in position and betting patterns
  
  const handStrength = getHandStrength(playerHand, communityCards);
  return Math.min(1, Math.max(0, handStrength));
};

// Get relative hand strength (0-1)
const getHandStrength = (playerHand: Card[], communityCards: Card[]): number => {
  const handRank = evaluateHand(playerHand, communityCards);
  
  // Simplified strength calculation based on hand rank
  const strengthMap: Record<string, number> = {
    'Royal Flush': 1,
    'Straight Flush': 0.95,
    'Four of a Kind': 0.9,
    'Full House': 0.8,
    'Flush': 0.7,
    'Straight': 0.6,
    'Three of a Kind': 0.5,
    'Two Pair': 0.4,
    'Pair': 0.3,
    'High Card': 0.2
  };
  
  return strengthMap[handRank] || 0.2;
};