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
  Paper,
  TextField,
  Grid,
} from "@suid/material"
import Layout from "../components/Layout/index"

import { authState } from "../App"
import useLobby from "../hooks/useLobby"

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
    <Layout bgcolor={"#F50057"}>
      <Container maxWidth="sm">
        <Paper sx={{ p: 5, mt: 5, textAlign: "center" }}>
          <Box
            component="img"
            src="https://res.cloudinary.com/dz4mll3dy/image/upload/v1679738770/grid_0_ihwp5q.png"
            alt="cover"
            sx={{ width: "80%", height: "180px", objectFit: "cover" }}
          />
          <Typography variant="h5" mt={3} fontSize="28px" fontWeight={600}>
            Welcome to Picsxit
          </Typography>
          <Typography fontSize="14px" mt={2}>
            An online game inspired by poppular boardgame "Dixit", with new set
            of cards created beautifully by ai to expand more of your
            imagination!
          </Typography>
          {/* <Typography sx={{ mt: 3, mb: 2 }} fontWeight={500}>
            Let's get started!!
          </Typography> */}
          <Stack sx={{ mt: 4 }} direction="column" spacing={2}>
            <Button
              variant="contained"
              sx={{ height: 52 }}
              onClick={() => loginMiddleware(onCreateLobby)}
            >
              Create Lobby
            </Button>
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  onKeyUp={(el: any) => {
                    idValue = el.target.value
                  }}
                  sx={{ mr: 2 }}
                  label="Lobby Id"
                  variant="filled"
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ height: 52 }}
                  onClick={() => loginMiddleware(() => onJoinLobby(idValue))}
                >
                  Join Lobby
                </Button>
              </Grid>
            </Grid>
          </Stack>
        </Paper>
        <Show when={!authState.user}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <LoginButton sx={{ mt: 3, width: "300px" }} />
          </Box>
        </Show>
      </Container>
    </Layout>
  )
}

export default Main
