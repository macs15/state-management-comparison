import React, { useCallback, useMemo } from 'react';
import { createContext, useContext } from 'react';

type CountContextType = {
  interval: number;
  prevCount: number;
  nextCount: number;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setInterval: React.Dispatch<React.SetStateAction<number>>;
  increment: () => void;
  decrement: () => void;
};

type CountProviderProps = {
  children: React.ReactNode;
};

const CountContext = createContext<CountContextType | undefined>(undefined);

function CountProvider(props: CountProviderProps) {
  const [interval, setInterval] = React.useState(1);
  const [count, setCount] = React.useState(0);

  const increment = useCallback(
    () => setCount((c) => c + interval),
    [setCount, interval],
  );
  const decrement = useCallback(
    () => setCount((c) => c - interval),
    [interval, setCount],
  );

  const value = useMemo(() => {
    return {
      interval,
      prevCount: count - 1,
      nextCount: count + 1,
      count,
      setCount,
      setInterval,
      increment,
      decrement,
    };
  }, [count, interval, increment, decrement]);

  return <CountContext.Provider value={value} {...props} />;
}

function useCount() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error('useCount must be used within a CountProvider');
  }
  //   const { count, setCount } = context;
  //   const increment = useCallback(() => setCount((c) => c + 1), [setCount]);
  //   return {
  //     count,
  //     increment,
  //   };
  // }
  return context;
}

export { CountProvider, useCount };
