// import React, { useState, useEffect, useContext, createContext } from 'react'
// import Router from 'next/router'
// import firebase from '../../../firebase/clientApp'
// import { createUser } from './db'

// const authContext = createContext()

// export function AuthProvider({ children }) {
//   const auth = useFirebaseAuth()
//   return <authContext.Provider value={auth}>{children}</authContext.Provider>
// }

// export const useAuth = () => {
//   return useContext(authContext)
// }

// function useFirebaseAuth() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const handleUser = async (rawUser) => {
//     if(rawUser){
//       const user = await formatUser(rawUser);
//       const { token, ...userWithoutToken } = user;

//       createUser(user.uid, userWithoutToken);
//       setUser(user);

//       setLoading(false);
//       return user;
//     } else {
//       setUser(false);
//       setLoading(false);
//       return false;
//     }
//   }

//   const signinWithGoogle = (redirect) => {
//     setLoading(true);
//     return firebase
//       .auth()
//       .signInWithPopup(new firebase.auth.GoogleAuthProvider())
//       .then((response) => {
//         handleUser(response.user);

//         if (redirect) {
//           Router.push(redirect);
//         }
//       });
//   };

//   const signout = () => {
//     return firebase
//       .auth()
//       .signOut()
//       .then(() => handleUser(false));
//   };

//   useEffect(() => {
//     const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);
//     return () => unsubscribe();
//   }, []);

//   return {
//     user,
//     loading,
//     signinWithGoogle,
//     signout,
//   };
// }

// const formatUser = async (user) => {
//   return {
//     uid: user.uid,
//     email: user.email,
//     name: user.displayName,
//     provider: user.providerData[0].providerId,
//     photoUrl: user.photoURL,
//   };
// };