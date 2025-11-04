import { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface TransitionContextType {
  navigate: (path: string, sourceElement?: HTMLElement) => void;
  isTransitioning: boolean;
}

const PageTransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const PageTransitionProvider = ({ children }: { children: ReactNode }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigateRouter = useNavigate();

  const navigate = (path: string, sourceElement?: HTMLElement) => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigateRouter(path);
      setTimeout(() => setIsTransitioning(false), 300);
    }, 300);
  };

  return (
    <PageTransitionContext.Provider value={{ navigate, isTransitioning }}>
      {children}
    </PageTransitionContext.Provider>
  );
};

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (!context) throw new Error('usePageTransition must be used within PageTransitionProvider');
  return context;
};
