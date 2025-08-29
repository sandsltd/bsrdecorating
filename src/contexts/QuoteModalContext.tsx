'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import QuoteModal from '@/components/QuoteModal';

interface QuoteModalContextType {
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
  isQuoteModalOpen: boolean;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export const useQuoteModal = () => {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error('useQuoteModal must be used within a QuoteModalProvider');
  }
  return context;
};

interface QuoteModalProviderProps {
  children: ReactNode;
}

export const QuoteModalProvider = ({ children }: QuoteModalProviderProps) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <QuoteModalContext.Provider value={{ 
      openQuoteModal, 
      closeQuoteModal, 
      isQuoteModalOpen 
    }}>
      {children}
      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={closeQuoteModal}
      />
    </QuoteModalContext.Provider>
  );
};
