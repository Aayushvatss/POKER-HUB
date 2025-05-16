import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface BankrollState {
  balance: number;
  addChips: (amount: number) => void;
  removeChips: (amount: number) => void;
  resetBankroll: () => void;
}

const INITIAL_BALANCE = 10000; // Start with 10,000 chips

export const useBankrollStore = create<BankrollState>()(
  persist(
    (set) => ({
      balance: INITIAL_BALANCE,
      addChips: (amount) => set((state) => ({ balance: state.balance + amount })),
      removeChips: (amount) => set((state) => ({ balance: Math.max(0, state.balance - amount) })),
      resetBankroll: () => set({ balance: INITIAL_BALANCE }),
    }),
    {
      name: 'poker-bankroll',
    }
  )
);