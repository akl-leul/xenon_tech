'use client';

import React, { createContext, useContext, useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallFeedback from "@/components/CallFeedback";
import FloatingBlackFridayCTA from "@/components/FloatingBlackFridayCTA";

interface CallContextType {
  initiateCall: () => void;
}

const CallContext = createContext<CallContextType | undefined>(undefined);

export const useCall = () => {
  const context = useContext(CallContext);
  if (!context) throw new Error('useCall must be used within a CallProvider');
  return context;
};

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [showFeedback, setShowFeedback] = useState(false);

  const initiateCall = () => {
    setShowFeedback(true);
  };

  return (
    <CallContext.Provider value={{ initiateCall }}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <CallFeedback isVisible={showFeedback} onClose={() => setShowFeedback(false)} />
      <FloatingBlackFridayCTA onCallClick={initiateCall} />
    </CallContext.Provider>
  );
}
