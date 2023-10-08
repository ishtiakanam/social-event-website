/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase-config";
import { signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        console.log({ email, password });
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const signIn = (email, password) => {
        console.log({ email, password });
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogIn = () => {
        return signInWithPopup(auth, provider)
            .then(result => {
                console.log(result);
            })
            .catch(err => console.log(err))
    }

    const logOut = () => {
        return signOut(auth)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            })
    }


    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        googleLogIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;