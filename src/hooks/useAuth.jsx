import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';

export const useAuth = () => {
  const { session, isLoading, handleSession } = useContext(LoginContext) 

  return { 
    session, 
    isLoading, 
    handleSession 
  };
}