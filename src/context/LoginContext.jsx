import React, { createContext, useEffect, useState } from "react";
import { useStorage } from '../hooks/useStorage';
import useIsOpen from "../hooks/useIsOpen";

export const LoginContext = createContext(null);

const urlBase = "http://localhost:5100/api";
const initialStateToken = localStorage.getItem("token") || null;

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
    const { handleSetStorageSession, handleGetStorageSession, handleRemoveStorageSession, decrypted } = useStorage();
    const [session, setSession] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);

    const handleSession = async (email, password) => {
        try {
            const response = await fetch(`${urlBase}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setSession({
                    msg: errorData.error,
                    showMsg: true
                })
                return
            }

            const data = await response.json();

            setSession({
                token: data.token,
                msg: 'Registro exitoso',
                showMsg: false
            })

            handleSetStorageSession(data)

            // Cerrar modal inicar sesión 
            openModal('modalOpen')

            return data;
        }
        catch (error) {
            setSession({
                email: '',
                token: initialStateToken,
                msg: `Error: ${error.message || "Problema de conexión"}`,
                showMsg: true
            })
        }
    };


    useEffect(() => {
        handleGetStorageSession();
    }, []);

    useEffect(() => {
        if (decrypted) {
            console.log('Decrypted value:', decrypted); 
            setSession(JSON.parse(decrypted)); 
        } else {
            console.log('No se encontró sesión en el almacenamiento');
        }
        setIsLoading(false);
    }, [decrypted]);

    handleRemoveStorageSession

    const logout = () => {
        setSession(initialState)
        handleRemoveStorageSession()
    };

    return (
        <LoginContext.Provider value={{ state, openModal, session, isLoading, handleSession,logout }}>
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;
