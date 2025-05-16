import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const strategies = [
  {
    id: 1,
    title: "Position Play",
    description: "Understanding table position is crucial in poker. Play tighter in early positions and looser in late positions.",
    tips: [
      "The dealer button (BTN) is the most profitable position",
      "Play fewer hands from early position (UTG, UTG+1)",
      "Defend your blinds, but don't overcommit with weak holdings",
      "Position gives you information advantage - use it!"
    ]
  },
  {
    id: 2,
    title: "Bankroll Management",
    description: "Proper bankroll management ensures you can weather downswings and play your best game without fear.",
    tips: [
      "Never play with money you can't afford to lose",
      "Have at least 20-30 buy-ins for your chosen stake",
      "Move down in stakes during downswings",
      "Track your results to identify leaks in your game"
    ]
  },
  {
    id: 3,
    title: "Bluffing Techniques",
    description: "Bluffing is an essential part of poker, but it should be done selectively and in the right situations.",
    tips: [
      "Bluff with hands that have blockers to your opponent's strong hands",
      "Bluff on boards that favor your perceived range",
      "Consider your table image when bluffing",
      "Semi-bluffs (draws with bluffing potential) are more profitable than pure bluffs"
    ]
  },
  {
    id: 4,
    title: "Reading Opponents",
    description: "Observing betting patterns and physical tells allows you to make better decisions against specific players.",
    tips: [
      "Look for timing tells in online poker",
      "Track betting patterns to identify tendencies",
      "Pay attention to how players protect their strong hands",
      "Notice when players deviate from their normal patterns"
    ]
  }
];

interface AccordionItemProps {
  title: string;
  description: string;
  tips: string[];
  isOpen: boolean;
  toggleOpen: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, description, tips, isOpen, toggleOpen }) => {
  return (
    <div className="border border-gold/20 rounded-lg overflow-hidden mb-4 bg-black/40">
      <button
        className="w-full px-4 py-3 text-left bg-gradient-to-r from-black to-red-900/30 flex justify-between items-center"
        onClick={toggleOpen}
      >
        <span className="text-lg font-medium text-white">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gold" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gold" />
        )}
      </button>
      
      {isOpen && (
        <div className="p-4 bg-black/20">
          <p className="text-gray-300 mb-4">{description}</p>
          
          <h4 className="text-gold text-sm font-medium mb-2">Pro Tips:</h4>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const StrategyGuide: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(1);
  
  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };
  
  return (
    <div className="bg-black/90 rounded-lg border border-gold/20 shadow-lg overflow-hidden">
      <div className="p-4 border-b border-gold/20 bg-gradient-to-r from-black to-red-900/30">
        <h2 className="text-xl font-serif text-gold">Poker Strategy Guide</h2>
        <p className="text-sm text-gray-400">Master advanced techniques used by professional players</p>
      </div>
      
      <div className="p-4">
        {strategies.map((strategy) => (
          <AccordionItem
            key={strategy.id}
            title={strategy.title}
            description={strategy.description}
            tips={strategy.tips}
            isOpen={openItem === strategy.id}
            toggleOpen={() => toggleItem(strategy.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default StrategyGuide;