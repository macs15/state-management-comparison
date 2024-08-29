import { atom } from 'jotai';

const initialInterval = 1;
const initialCount = 0;

export const countAtom = atom(initialCount);

export const intervalAtom = atom(initialInterval);

export const prevCountAtom = atom((get) => get(countAtom) - get(intervalAtom));
export const nextCountAtom = atom((get) => get(countAtom) + get(intervalAtom));

export const incrementCountAtom = atom(null, (get, set) => {
  const interval = get(intervalAtom);
  set(countAtom, (c) => c + interval);
});

export const decrementCountAtom = atom(null, (get, set) => {
  const interval = get(intervalAtom);
  set(countAtom, (c) => c - interval);
});

export const setIntervalAtom = atom(null, (get, set, newInterval: number) => {
  set(intervalAtom, newInterval);
});
