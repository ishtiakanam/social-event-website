/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase-config";
import { signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider();
    // console.log({ user });
    const createUser = (email, password) => {
        console.log({ email, password });
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // useEffect(() => {
    //     const tempUser = localStorage.getItem('user');
    //     if (tempUser) {
    //         setUser(JSON.parse(tempUser))
    //     }
    // }, [])

    useEffect(() => {
        const tempUser = localStorage.getItem('user');
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
            }
            if (tempUser) {
                setUser(JSON.parse(tempUser))
            }
        })
        return () => {

            unSubscribe()
        }
    }, [])

    const signIn = (email, password) => {
        // console.log({ email, password });
        return signInWithEmailAndPassword(auth, email, password)
        // const test = signInWithEmailAndPassword(auth, email, password);
        // console.log({ test });

    }

    const googleLogIn = () => {
        return signInWithPopup(auth, provider)
            .then(result => {
                console.log(result);
                localStorage.setItem("user", JSON.stringify(result.user));
            })
            .catch(err => console.log(err))
    }

    const logOut = () => {
        return signOut(auth)
            .then(result => {
                console.log(result);
                localStorage.removeItem('user');
                setUser()
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