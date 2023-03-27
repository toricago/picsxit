import {
  Component,
  Switch,
  Match,
  createEffect,
  on,
  For,
  onCleanup,
  Show,
} from "solid-js"
import { useParams } from "@solidjs/router"
import {
  Box,
  Container,
  Typography,
  LinearProgress,
  CircularProgress,
  Stack,
  Button,
} from "@suid/material"
import StarsIcon from "@suid/icons-material/Stars"

import { authState } from "../App"
import useLobby from "../hooks/useLobby"

const Loading = () => (
  <Box
    height={400}
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <CircularProgress size={50} thickness={5} />
  </Box>
)

const GameBoard: Component = () => {
  const params = useParams()

  return (
    <Container maxWidth="md">
      <Typography variant="h1" fontWeight={400}>
        Game
      </Typography>
      <Typography mt={5} variant="h6" fontWeight={600}>
        Lobby code:{" "}
        <Typography variant="h6" color="primary" fontWeight={600}>
          {params.id}
        </Typography>
      </Typography>
      <Typography mt={3}>
        Please wait for atleast 3 players to start the game.
      </Typography>
      <LinearProgress sx={{ my: 1 }} />
      <Box mt={3}>
        <Typography mb={2} fontWeight={600}>
          Players:
        </Typography>
      </Box>
    </Container>
  )
}

export default GameBoard
