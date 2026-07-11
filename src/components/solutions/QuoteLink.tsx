"use client";

import type { ReactNode } from "react";
import { useQuote } from "@/components/layout/QuoteProvider";

export function QuoteLink({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { openQuote } = useQuote();

  return (
    <button type="button" className={className} onClick={openQuote}>
      {children}
    </button>
  );
}
