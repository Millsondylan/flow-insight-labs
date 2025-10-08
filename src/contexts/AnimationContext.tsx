
import { createContext, useContext, ReactNode } from 'react';

interface AnimationContextType {
  animationsEnabled: boolean;
  rootClassName?: string;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider = ({ children, enabled, rootClassName }: { children: ReactNode, enabled: boolean, rootClassName?: string }) => {
  return (
    <AnimationContext.Provider value={{ animationsEnabled: enabled, rootClassName }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    // Default to animations enabled if not within a provider
    return { animationsEnabled: true, rootClassName: undefined };
  }
  return context;
};
