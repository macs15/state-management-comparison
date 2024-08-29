import { createStore } from 'zustand';

export type CounterState = {
  interval: number;
  count: number;
  prevCount: number;
  nextCount: number;
};

export type CounterActions = {
  setCount: (value: number) => void;
  setInterval: (value: number) => void;
  increment: () => void;
  decrement: () => void;
};

export type CounterStore = CounterState & CounterActions;

// This means that the store can be initialized with dynamic values if needed.
export const initCounterStore = (): CounterState => {
  // const initialCount = new Date().getFullYear();
  const initialCount = 0;
  return {
    interval: 1,
    count: initialCount,
    prevCount: initialCount - 1,
    nextCount: initialCount + 1,
  };
};

export const defaultInitState: CounterState = {
  interval: 1,
  count: 0,
  prevCount: -1,
  nextCount: 1,
};

export const createCounterStore = (
  initState: CounterState = defaultInitState,
) => {
  return createStore<CounterStore>()((set) => ({
    ...initState,
    setCount: (value: number) =>
      set((state) => ({
        count: value,
        prevCount: value - 1,
        nextCount: value + 1,
      })),
    setInterval: (value: number) =>
      set(() => ({
        interval: value,
      })),
    increment: () =>
      set((state) => ({
        count: state.count + state.interval,
        prevCount: state.count,
        nextCount: state.count + state.interval + 1,
      })),
    decrement: () =>
      set((state) => ({
        count: state.count - state.interval,
        prevCount: state.count,
        nextCount: state.count - state.interval - 1,
      })),
  }));
};
