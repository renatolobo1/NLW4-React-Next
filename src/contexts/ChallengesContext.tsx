import {createContext, ReactNode, useState} from 'react';
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengeContextData {
  level: number; 
  currentExperience: number;
  experienceTonNextLevel: number;
  challengeCompleted: number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge:() => void;
  
}

interface ChallengesProviderProps{
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({children}:ChallengesProviderProps){
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengeCompleted, setChallengeCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceTonNextLevel = Math.pow((level+1 )* 4 , 2)

  function levelUp(){
    setLevel(level + 1);
  }

  function startNewChallenge(){
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  }

  function resetChallenge(){
    setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider 
      value={{
        level, 
        currentExperience, 
        experienceTonNextLevel,
        challengeCompleted, 
        activeChallenge,
        levelUp,
        startNewChallenge,
        resetChallenge,
        
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
  
}
