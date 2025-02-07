import React, { createContext, useEffect, useState } from "react";
import { useStorage } from '../hooks/useStorage';
import useIsOpen from "../hooks/useIsOpen";

export const LoginContext = createContext(null);

const urlBase = "http://localhost:5100/api";
const initialStateToken = localStorage.getItem("token") || null;

const initialState = {
    id: null,
    email: '',
    token: null,
    role: 'user',
    msg: '',
    showMsg: false,
};

const LoginProvider = ({ children }) => {
    const { state, toggle:openModal } = useIsOpen()
    const { handleSetStorageSession, handleGetStorageSession, handleRemoveStorageSession, decrypted } = useStorage();
    const [session, setSession] = useState(initialState);
    const [perfil, setPerfil] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    console.log('session',session)

    useEffect(() => {
        if (session.token) {
            handleProfile(session.token)
        } else {
            handleRemoveStorageSession()
        }
    }, [session.token]);


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
            setSession(JSON.parse(decrypted)); 
        } 
        
        setIsLoading(false);
    }, [decrypted]);

    const logout = () => {
        setSession(initialState)
        handleRemoveStorageSession()
    };

    const handleRegister = async (values) => {
        const { nombre, apellidos, telefono, region, comuna, direccion, email, password } = values 

        try {
            const response = await fetch(`${urlBase}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nombre, apellidos, telefono, region, comuna, direccion, email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setSession((prevAuth) => ({
                    ...prevAuth,
                    msg: errorData.error || "Error al registrar el usuario",
                    showMsg: true,
                }));
                return
            }

            const data = await response.json();

            setSession({
                msg: 'Usuario registrado con exito.',
                showMsg: true
            })

            return data;
        }
        catch (error) {
            setSession({
                msg: `Error: ${error.message || "Problema de conexión"}`,
                showMsg: true
            })
        }
    };


    const handleProfile = async (token) => {
        try {
            const response = await fetch(`${urlBase}/auth/me`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
          
            if (!response.ok) {
                const errorData = await response.json();
                setSession((prevAuth) => ({
                    ...prevAuth,
                    msg: errorData.error || "Error desconocido al obtener el perfil",
                    showMsg: true,
                }));
                return
            }

            const data = await response.json();
            setPerfil(data);
            return data;
        }
        catch (error) {
            setSession((prevAuth) => ({
                ...prevAuth,
                msg: `Error: ${error.message || "al traer los datos del perfil"}`,
                showMsg: true,
            }));
        }
    };




    return (
        <LoginContext.Provider value={{ state, openModal, session, isLoading, handleSession, handleRegister, perfil, handleProfile, logout }}>
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;
