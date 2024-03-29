import React, { createContext, useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const [isValid, setIsValid] = useState(false);
    const storedData = JSON.parse(localStorage.getItem('user_data'));

    useEffect(()=>{
        if(storedData){
            const { userToken, user } = storedData;
            setToken(userToken);
            setUserData(user);
            setIsValid(true);
        }
    },[]);

    const login = (newToken, newData) => {
        localStorage.setItem(
            'user_data',
            JSON.stringify({userToken: newToken, user: newData}),
        );

        setToken(newToken);
        setUserData(newData);
        setIsValid(true);
    };

    const logout = ()=> {
        localStorage.removeItem('user_data');
        setToken(null);
        setUserData(null);
        setIsValid(false);
    };


    return(
       <AuthContext.Provider value={{token, isValid, login, logout, userData}}>
        {children}
       </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);