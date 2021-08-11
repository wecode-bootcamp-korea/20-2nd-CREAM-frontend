import React, { createContext } from 'react';

export const userContext = createContext();

export default function Store({ children }) {
  return <userContext.Provider value={users}>{children}</userContext.Provider>;
}

const users = {
  name: 'hwarari',
  job: 'developer',
};
