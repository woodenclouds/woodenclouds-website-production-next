"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { QuoteModal } from "./QuoteModal";

type QuoteContextValue = {
  openQuote: () => void;
};

const QuoteContext = createContext<QuoteContextValue>({ openQuote: () => {} });

export function useQuote() {
  return useContext(QuoteContext);
}

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <QuoteContext.Provider value={{ openQuote: () => setOpen(true) }}>
      {children}
      <QuoteModal open={open} onClose={() => setOpen(false)} />
    </QuoteContext.Provider>
  );
}
