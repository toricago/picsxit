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
import useGameBoard from "../hooks/useGameBoard"

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

const Lobby: Component = () => {
  const params = useParams()
  const { getLobby, joinLobby, leaveLobby } = useLobby()
  const { setUpGame } = useGameBoard()

  const lobbyData = getLobby(params.id)

  createEffect(
    on(
      lobbyData,
      (_lobbyData) => {
        const players = _lobbyData?.players
        const userData = {
          id: authState?.user?.uid,
          username: authState?.user?.displayName,
        }
        const findUserInLobby = players.find(
          (p: typeof userData) => p.id === userData.id
        )
        if (!findUserInLobby) {
          joinLobby(params.id, [...players, userData])
        }
      },
      { defer: true }
    )
  )

  onCleanup(() => {
    const players = lobbyData()?.players
    const userId = authState?.user?.uid

    if (lobbyData()?.host !== userId) {
      const filteredOut = players.filter((p: any) => p.id !== userId)
      leaveLobby(lobbyData()?.id, [...filteredOut])
    }
  })

  const onSetUpGame = () => {
    const players = lobbyData()?.players
    setUpGame(params.id, players)
  }

  return (
    <Container maxWidth="md">
      <Switch>
        <Match when={!lobbyData()}>
          <Loading />
        </Match>
        <Match when={lobbyData()}>
          <Typography variant="h1" fontWeight={400}>
            Lobby
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
            <Stack spacing={2}>
              <For each={lobbyData()?.players}>
                {(player) => {
                  if (player.id === lobbyData()?.host) {
                    return (
                      <Typography color="primary">
                        {player.username} (host) <StarsIcon sx={{ mb: -0.6 }} />
                      </Typography>
                    )
                  }
                  return <Typography>{player.username}</Typography>
                }}
              </For>
            </Stack>
            <Show when={authState?.user?.uid === lobbyData()?.host}>
              <Button
                variant="contained"
                sx={{ mt: 4 }}
                // disabled={lobbyData()?.players?.length < 3}
                onClick={onSetUpGame}
              >
                Start Game
              </Button>
            </Show>
          </Box>
        </Match>
      </Switch>
    </Container>
  )
}

export default Lobby
