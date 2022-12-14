import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../../Firebase/Firebase.Config';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logoutUser = () => {
        localStorage.removeItem('creative-token')
        setLoading(true);
        return signOut(auth);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }
    

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])




    
    //code for toggle theme starts here
    const [theme, setTheme] = useState("Light");

    useEffect( () => {
        if(theme === "dark"){
            document.documentElement.classList.add("dark")
        }
        else{
            document.documentElement.classList.remove("dark")
            
        }
        const getStoredTheme = localStorage.getItem('creativeDefaultTheme');
        setTheme(getStoredTheme);

    }, [theme])


    const ThemeChange = () => {
        setTheme(theme === "dark" ? "Light" : "dark")
        localStorage.setItem('creativeDefaultTheme', theme === "dark" ? "Light" : "dark" )
    }

    const handleThemeSwitch = () => {
        ThemeChange()
    }
    //code for toggle theme ends here


    const AuthInfo = {user, createUser, loginUser, loading, setLoading, logoutUser, googleLogin, githubLogin, updateUserProfile, theme, ThemeChange, handleThemeSwitch }
    
    return (
        <AuthContext.Provider value ={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

