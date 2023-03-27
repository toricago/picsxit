import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as _signOut,
} from "firebase/auth"
import { Component } from "solid-js"
import { app } from "../firebase"

import { Button } from "@suid/material"
import { styled } from "@suid/material/styles"

export const signIn = () =>
  signInWithPopup(getAuth(app), new GoogleAuthProvider())

export const signOut = () => {
  _signOut(getAuth(app))
}

const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "#16040B",
  "&:hover": {
    backgroundColor: "#16040B",
  },
  height: 52,
  borderRadius: "30px",
}))

export const LoginButton: Component<any> = (props) => {
  return (
    <ColorButton variant="contained" onClick={signIn} {...props}>
      Sign In with Google
    </ColorButton>
  )
}
