import { createContext } from 'react';

export const initalSelected = {
  body: '#000000',
  pickguard: '#ffffff',
  fingerboard: '#ffffff',
  head: '#ffffff',
};

export const SelectedContext = createContext(initalSelected);
