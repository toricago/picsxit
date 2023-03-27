import { Component, Show } from "solid-js"
import { useNavigate } from "@solidjs/router"
import toast from "solid-toast"

import { LoginButton, signIn } from "../components/Login"
import {
  Box,
  Button,
  Container,
  Typography,
  Stack,
  Divider,
  TextField,
} from "@suid/material"

import { authState } from "../App"
import useLobby from "../hooks/useLobby"
import Swiper from "../components/Swiper"

const popError = (text: string) => toast.error(text, { duration: 5000 })

const Main: Component = () => {
  const navigate = useNavigate()
  const { createLobby } = useLobby()
  let idValue: string

  const onCreateLobby = () => {
    createLobby().then((id) => {
      navigate("/" + id)
    })
  }

  const onJoinLobby = (id: string) => {
    if (!id) {
      popError("Please put the game lobby id!")
    } else {
      navigate("/" + id)
    }
  }

  const loginMiddleware = (cb: Function) => {
    if (!authState.user) {
      signIn().then(() => {
        cb()
      })
    } else {
      cb()
    }
  }

  return (
    <Box>
      <Container maxWidth="md">
        <Typography variant="h1" fontWeight={400}>
          Welcome to Picsxit
        </Typography>
        <Typography mt={2}>
          Get ready to experience a new twist on the classic Dixit-like game!
          Our online game features custom cards created by AI, with unique
          illustrations that will take your imagination on a wild ride.
        </Typography>
        <Typography sx={{ mt: 3, mb: 2 }} fontWeight={500}>
          Let's get started!!
        </Typography>
        <Stack direction="column" spacing={2}>
          <Button
            variant="contained"
            sx={{ width: "30%", height: 52 }}
            onClick={() => loginMiddleware(onCreateLobby)}
          >
            Create Lobby
          </Button>
          <Box>
            <TextField
              onKeyUp={(el: any) => {
                idValue = el.target.value
              }}
              sx={{ mr: 2 }}
              label="Lobby Id"
              variant="outlined"
            />
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "30%", height: 52 }}
              onClick={() => loginMiddleware(() => onJoinLobby(idValue))}
            >
              Join Lobby
            </Button>
          </Box>
        </Stack>
        <Divider sx={{ my: 3 }} />
        <Show when={!authState.user}>
          <LoginButton />
        </Show>
        <Swiper />
      </Container>
    </Box>
  )
}

export default Main
