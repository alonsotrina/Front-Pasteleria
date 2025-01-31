import React, { createContext, useEffect, useState } from "react";
// import { useIsOpen } from "../hooks/Index";
import { useStorage } from '../hooks/useStorage'
export const LoginContext = createContext(null)

const initialState = {
    id: null,
    email: 'alonsotrina@gmail.com',
    token: null,
    role: 'user',
    msg: 'Inicio realizao con éxito',
    showMsg: false,
};

const LoginProvider = ({ children }) => {
    // const { state, toggle } = useIsOpen()
    const { handleSetStorageSession, handleGetStorageSession, decrypted } = useStorage()
    const [session, setSession] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)

    const handleSession = (data) => {
        setSession(data)
        handleSetStorageSession(data)
    }

    useEffect(() => {
        handleGetStorageSession()
    }, [])

    useEffect(() => {
       if(decrypted){
        setSession(JSON.parse(decrypted))
       }
       setTimeout(() => {
        setIsLoading(false);
    }, 1);
    },[decrypted])

    return (
        <LoginContext.Provider value={{ session, isLoading, handleSession }}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider