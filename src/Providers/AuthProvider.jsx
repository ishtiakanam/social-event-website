/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase-config";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("")


    const createUser = (email, password) => {
        console.log({ email, password });
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        console.log({ email, password });
        return signInWithEmailAndPassword(auth, email, password)
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
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;