
import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();

export default function AuthProvider({children})     //{childern main.jsx se aa rha h}
{
    const initialAuthUser = localStorage.getItem("Users");

    const [authUser, setAuthUser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    );

    return (
        <AuthContext.Provider value={[ authUser, setAuthUser ]}>
            {children}
        </AuthContext.Provider>
    )
}

//we use this context through useAuth();
export const useAuth = ()=> useContext(AuthContext);