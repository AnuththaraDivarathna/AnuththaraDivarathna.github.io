import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<'scaling' | 'complete'>('scaling');

  useEffect(() => {
    // Show scaling animation for 3 seconds
    const scalingTimer = setTimeout(() => {
      setPhase('complete');
    }, 3000);

    // Complete loading after fade out
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(scalingTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <div className={`text-center transition-all duration-500 ${phase === 'complete' ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <h1 className="loading-text-scale loading-text-gradient text-4xl md:text-6xl lg:text-7xl font-black">
          Anuththara Divarathna
        </h1>
        <div className="mt-6">
          <div className="loading-dots flex justify-center space-x-2">
            <div className="loading-dot w-2 h-2 bg-blue-600 rounded-full"></div>
            <div className="loading-dot w-2 h-2 bg-purple-600 rounded-full"></div>
            <div className="loading-dot w-2 h-2 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}