import React, { createContext, useContext } from 'react'
import { auth,db } from '../firebase-config';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import {setDoc,doc} from 'firebase/firestore'

const ContextAuth = createContext();

export default function AuthContext({children}) {
    const [user,setUser] = React.useState({})

    function signUp(email,password){
         createUserWithEmailAndPassword(auth,email,password)
         setDoc(doc(db,'users',email),{
            savedShows: []
         })
    }

    function logOut(){
        return signOut(auth)
    }

    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    React.useEffect(()=>{
        const unsub = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsub()
        }
    },[])

    const value = {
        user,
        setUser,
        signUp,
        logOut,
        logIn,
    }

  return (
    <ContextAuth.Provider value={value}>
      {children}
    </ContextAuth.Provider>
  )
}


export function useAuthContext(){
    return useContext(ContextAuth)
}