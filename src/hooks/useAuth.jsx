import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';

export const useAuth = () => {
  const { state, openModal, session, isLoading, handleSession, logout } = useContext(LoginContext) 

  return { 
    state, 
    openModal,
    session, 
    isLoading, 
    handleSession,
    logout
  };
}