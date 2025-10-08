
import { createContext, useContext, ReactNode } from 'react';

interface AnimationContextType {
  animationsEnabled: boolean;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider = ({ children, enabled }: { children: ReactNode, enabled: boolean }) => {
  return (
    <AnimationContext.Provider value={{ animationsEnabled: enabled }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    // Default to animations enabled if not within a provider
    return { animationsEnabled: true };
  }
  return context;
};
