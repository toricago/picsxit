import {
  Component,
  createSignal,
  Switch,
  Match,
  createEffect,
  on,
  For,
} from "solid-js"
import { useParams } from "@solidjs/router"
import { Box, Container, Typography, Grid, Paper } from "@suid/material"
import Layout from "../components/Layout/index"

import { authState } from "../App"
import useLobby from "../hooks/useLobby"
import useGameBoard, {
  handInterface,
  scoreInterface,
  playerInterface,
  cardInterface,
  storyInterface,
} from "../hooks/useGameBoard"
import Loading from "../components/Loading"
import CardDialog from "../components/CardDialog"

const GameBoard: Component = () => {
  const { id, gameid } = useParams()
  const { getLobby } = useLobby()
  const { getGame, tellStory } = useGameBoard()
  const [selectedCard, setSelectedCard] = createSignal<cardInterface>()

  const lobbyData = getLobby(id)
  const gameData = getGame(gameid)

  createEffect(
    on(
      gameData,
      (_gameData) => {
        console.log(_gameData)
        console.log(getMyHand().hand)
      },
      { defer: true }
    )
  )

  const getMyHand = () => {
    const filtered = gameData()?.hands?.find(
      (hand: handInterface) => hand.playerId === authState?.user?.uid
    )
    return filtered
  }

  const onTellStory = (story: storyInterface) => {
    const _hands = gameData()?.hands.map((h: handInterface) => {
      if (h.playerId === authState?.user?.uid) {
        return {
          ...h,
          hand: h.hand.filter(
            (c: cardInterface) => c.number !== selectedCard()?.number
          ),
        }
      }
      return h
    })

    tellStory(gameid, story, _hands, [
      { playerId: authState?.user?.uid || "", card: selectedCard() },
    ])
  }

  const onChooseCard = () => {}

  const onVote = () => {}

  return (
    <Layout bgcolor="#F39D63">
      <Container maxWidth="md">
        <CardDialog
          card={selectedCard()}
          onClose={() => setSelectedCard(undefined)}
          onTellStory={onTellStory}
          onChooseCard={onChooseCard}
          onVote={onVote}
          phase={gameData()?.phase}
        />
        <Switch>
          <Match when={!lobbyData()}>
            <Loading />
          </Match>
          <Match when={lobbyData()}>
            <Paper sx={{ p: 2 }}>
              <Grid container flexWrap="wrap" spacing={2}>
                <For each={gameData()?.scores}>
                  {(score: scoreInterface) => (
                    <Grid item>
                      <Typography
                        color={
                          score.playerId === authState?.user?.uid
                            ? "primary"
                            : "text.primary"
                        }
                      >
                        {
                          gameData()?.players.find(
                            (p: playerInterface) => p?.id === score.playerId
                          ).username
                        }
                        {score.playerId === authState?.user?.uid && " (teller)"}
                      </Typography>
                      <Typography textAlign="center">{score.score}</Typography>
                    </Grid>
                  )}
                </For>
              </Grid>
            </Paper>
            <Typography py={2} fontWeight={600}>
              {gameData()?.phase === "tellStory" &&
                "Waiting for teller to tell story..."}
            </Typography>
            <Grid container justifyContent="center" flexWrap="wrap" spacing={2}>
              <For each={getMyHand()?.hand}>
                {(card: cardInterface) => (
                  <Grid item>
                    <Box
                      component="img"
                      src={card.url}
                      alt="card"
                      borderRadius={4}
                      sx={{
                        objectFit: "cover",
                        width: (250 * 2) / 3,
                        height: 250,
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setSelectedCard(card)
                      }}
                    />
                  </Grid>
                )}
              </For>
              <Grid item></Grid>
            </Grid>
          </Match>
        </Switch>
      </Container>
    </Layout>
  )
}

export default GameBoard
