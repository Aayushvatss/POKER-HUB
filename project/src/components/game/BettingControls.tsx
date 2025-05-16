import React, { useState } from 'react';
import { useBankrollStore } from '../../stores/bankrollStore';
import { DollarSign, Plus, Minus } from 'lucide-react';

interface BettingControlsProps {
  onBet: (amount: number) => void;
  disabled: boolean;
}

const BettingControls: React.FC<BettingControlsProps> = ({ onBet, disabled }) => {
  const { balance, removeChips } = useBankrollStore();
  const [betAmount, setBetAmount] = useState(100);
  
  const predefinedBets = [100, 250, 500, 1000];
  
  const handleBet = () => {
    if (betAmount <= balance && !disabled) {
      removeChips(betAmount);
      onBet(betAmount);
    }
  };
  
  const adjustBet = (amount: number) => {
    const newBet = Math.max(0, Math.min(balance, betAmount + amount));
    setBetAmount(newBet);
  };
  
  return (
    <div className="absolute bottom-6 left-6 flex flex-col space-y-2">
      <div className="flex items-center space-x-2 mb-2">
        <DollarSign className="h-5 w-5 text-gold" />
        <span className="text-white font-medium">Balance: {balance.toLocaleString()} chips</span>
      </div>
      
      <div className="flex space-x-2">
        <button
          onClick={() => adjustBet(-100)}
          className="p-2 bg-red-900/50 text-white rounded hover:bg-red-900/70 transition-colors"
          disabled={betAmount <= 100}
        >
          <Minus className="h-4 w-4" />
        </button>
        
        <input
          type="number"
          value={betAmount}
          onChange={(e) => setBetAmount(Math.min(balance, Math.max(0, parseInt(e.target.value) || 0)))}
          className="w-24 px-3 py-2 bg-black/50 text-white rounded border border-gold/20 focus:outline-none focus:border-gold"
        />
        
        <button
          onClick={() => adjustBet(100)}
          className="p-2 bg-red-900/50 text-white rounded hover:bg-red-900/70 transition-colors"
          disabled={betAmount >= balance}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      
      <div className="flex space-x-2">
        {predefinedBets.map((amount) => (
          <button
            key={amount}
            onClick={() => setBetAmount(amount)}
            className={`px-3 py-1 rounded text-sm ${
              betAmount === amount
                ? 'bg-red-700 text-white'
                : 'bg-black/50 text-gray-300 hover:bg-red-900/30'
            } transition-colors`}
            disabled={amount > balance}
          >
            {amount}
          </button>
        ))}
      </div>
      
      <button
        onClick={handleBet}
        disabled={disabled || betAmount > balance || betAmount <= 0}
        className={`px-4 py-2 rounded shadow-lg text-white border border-gold/20
          ${disabled || betAmount > balance || betAmount <= 0
            ? 'bg-gray-700/50 cursor-not-allowed'
            : 'bg-gradient-to-r from-red-700 to-red-900 hover:shadow-red-900/50'
          } transition-all duration-200`}
      >
        Place Bet
      </button>
    </div>
  );
};

export default BettingControls;