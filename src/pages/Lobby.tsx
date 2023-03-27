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
  Stack,
  Paper,
  Button,
} from "@suid/material"
import { useNavigate } from "@solidjs/router"
import StarsIcon from "@suid/icons-material/Stars"
import Layout from "../components/Layout/index"

import { authState } from "../App"
import useLobby from "../hooks/useLobby"
import useGameBoard from "../hooks/useGameBoard"
import Loading from "../components/Loading"

const Lobby: Component = () => {
  const params = useParams()
  const navigate = useNavigate()
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
        // join lobby when enter lobby if not already in
        if (!findUserInLobby) {
          joinLobby(params.id, [...players, userData])
        }
        // redirect to game page when game state changed
        if (_lobbyData?.lobbyState === "game") {
          navigate(`/${params.id}/game/${_lobbyData?.gameId}`, {
            replace: true,
          })
        }
      },
      { defer: true }
    )
  )

  onCleanup(() => {
    const players = lobbyData()?.players
    const userId = authState?.user?.uid

    if (lobbyData()?.lobbyState === "lobby") {
      // if other players than host leave page, then leave lobby
      if (lobbyData()?.host !== userId) {
        const filteredOut = players.filter((p: any) => p.id !== userId)
        leaveLobby(lobbyData()?.id, [...filteredOut])
      }
    }
  })

  const onSetUpGame = () => {
    const players = lobbyData()?.players
    setUpGame(params.id, players)
  }

  return (
    <Layout bgcolor="#8663F3">
      <Container maxWidth="sm">
        <Switch>
          <Match when={!lobbyData()}>
            <Loading />
          </Match>
          <Match when={lobbyData()}>
            <Paper sx={{ p: 5, mt: 2, textAlign: "center" }}>
              <Box
                component="img"
                src="https://res.cloudinary.com/dz4mll3dy/image/upload/v1679738770/grid_0_ihwp5q.png"
                alt="cover"
                sx={{ width: "80%", height: "180px", objectFit: "cover" }}
              />
              <Typography variant="h5" mt={3} fontSize="28px" fontWeight={600}>
                Game Lobby
              </Typography>
              <Typography mt={3} variant="h6" fontWeight={600}>
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
                  Players: {lobbyData()?.players?.length}
                </Typography>
                <Stack spacing={2}>
                  <For each={lobbyData()?.players}>
                    {(player) => {
                      if (player.id === lobbyData()?.host) {
                        return (
                          <Typography color="primary">
                            {player.username} (host){" "}
                            <StarsIcon sx={{ mb: -0.6 }} />
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
                    // disabled={lobbyData()?.players?.length < 2}
                    onClick={onSetUpGame}
                  >
                    Start Game
                  </Button>
                </Show>
              </Box>
            </Paper>
          </Match>
        </Switch>
      </Container>
    </Layout>
  )
}

export default Lobby
