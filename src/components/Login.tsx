import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as _signOut,
} from "firebase/auth"
import { Component } from "solid-js"
import { app } from "../firebase"

import { Button } from "@suid/material"

export const signIn = () =>
  signInWithPopup(getAuth(app), new GoogleAuthProvider())

export const signOut = () => {
  _signOut(getAuth(app))
}

export const LoginButton: Component<{}> = (props) => {
  return (
    <Button variant="outlined" color="inherit" onClick={signIn}>
      Sign In with Google
    </Button>
  )
}
