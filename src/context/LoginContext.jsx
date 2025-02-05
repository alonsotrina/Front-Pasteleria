import React, { createContext, useEffect, useState } from "react";
import { useStorage } from '../hooks/useStorage';
import useIsOpen from "../hooks/useIsOpen";

export const LoginContext = createContext(null);

const initialState = {
    id: null,
    email: 'alonsotrina@gmail.com',
    token: null,
    role: 'user',
    msg: 'Inicio realizado con éxito',
    showMsg: false,
};

const LoginProvider = ({ children }) => {
    const { state, toggle:openModal } = useIsOpen()
    const { handleSetStorageSession, handleGetStorageSession, decrypted } = useStorage();
    const [session, setSession] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);

    const handleSession = (data) => {
        setSession(data);
        handleSetStorageSession(data);
    };

    useEffect(() => {
        handleGetStorageSession();
    }, []);

    // useEffect(() => {
    //     if (decrypted) {
    //         console.log('Decrypted value:', decrypted); 
    //         setSession(JSON.parse(decrypted)); 
    //     } else {
    //         console.log('No se encontró sesión en el almacenamiento');
    //     }
    //     setIsLoading(false);
    // }, [decrypted]);

    return (
        <LoginContext.Provider value={{ state, openModal, session, isLoading, handleSession }}>
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;
