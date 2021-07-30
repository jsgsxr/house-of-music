import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { FirebaseAdapter } from "@next-auth/firebase-adapter"
import firebase from "../../../firebase/initFirebase"

const firestore = firebase.firestore()

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Providers.Facebook({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    })
  ],
  adapter: FirebaseAdapter(firestore),
});