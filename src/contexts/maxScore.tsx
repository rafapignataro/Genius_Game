import React, { createContext, useContext, useState } from 'react';

const MaxScoreContext = createContext(null);

export default function MaxScoreProvider({children}) {
  const [maxScore, setMaxScore] = useState(0);
  return (
    <MaxScoreContext.Provider value={{maxScore, setMaxScore}}>
      {children}
    </MaxScoreContext.Provider>
  );
}

export function useMaxScore() {
  const context = useContext(MaxScoreContext);

  if (!context)
    throw new Error('useMaxScore must me used inside a MaxScoreProvider.');

  const {maxScore, setMaxScore} = context;

  return {maxScore, setMaxScore};
}
