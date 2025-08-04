// app/share/context.ts
import { createContext, Dispatch, SetStateAction } from 'react';

// Define a type for your context data for better type safety
export interface ICounterContext {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
}

// Export the context from this new file
export const DataContext = createContext<ICounterContext | undefined>(undefined);