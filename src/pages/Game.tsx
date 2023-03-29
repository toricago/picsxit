import {
  Component,
  createSignal,
  Switch,
  Match,
  createEffect,
  on,
  For,
  Show,
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
  tableCardInterface,
  storyInterface,
} from "../hooks/useGameBoard"
import Loading from "../components/Loading"
import CardDialog from "../components/CardDialog"

const GameBoard: Component = () => {
  const { id, gameid } = useParams()
  const { getLobby } = useLobby()
  const { getGame, tellStory, putCardToTable, vote } = useGameBoard()
  // handle select card on table
  const [selectedCard, setSelectedCard] = createSignal<cardInterface>()

  const lobbyData = getLobby(id)
  const gameData = getGame(gameid)

  createEffect(
    on(
      gameData,
      (_gameData) => {
        console.log(_gameData)
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

  const findIfChoseCardToTable = (playerId?: string) =>
    gameData()?.tableCards?.find(
      (tcard: tableCardInterface) => tcard.playerId === playerId
    )
  const findIfVoted = (playerId?: string) =>
    gameData()?.votes?.find(
      (vote: tableCardInterface) => vote.playerId === playerId
    )

  // filterd card from hand
  const removeFromHand = (playerId?: string) => {
    const _hands = gameData()?.hands.map((h: handInterface) => {
      if (h.playerId === playerId) {
        return {
          ...h,
          hand: h.hand.filter(
            (c: cardInterface) => c.number !== selectedCard()?.number
          ),
        }
      }
      return h
    })

    return _hands
  }

  //
  const onTellStory = (story: storyInterface) => {
    const hands = removeFromHand(authState?.user?.uid)
    const table = [
      { playerId: authState?.user?.uid || "", card: selectedCard() },
    ]

    tellStory(gameid, story, hands, table)
    setSelectedCard(undefined)
  }

  const onPutCardToTable = () => {
    const hands = removeFromHand(authState?.user?.uid)
    const table = [
      ...gameData()?.tableCards,
      { playerId: authState?.user?.uid, card: selectedCard() },
    ]
    const isLastToPut = table.length === gameData()?.players.length

    putCardToTable(gameid, hands, table, isLastToPut)
    setSelectedCard(undefined)
  }

  const onVote = () => {
    const _votes = [
      ...gameData()?.votes,
      { playerId: authState?.user?.uid, number: selectedCard()?.number },
    ]
    const isLastToVote = _votes.length === gameData()?.players.length - 1

    vote(gameid, _votes, isLastToVote)
    setSelectedCard(undefined)
  }

  return (
    <Layout bgcolor="#F39D63">
      <Container maxWidth="md">
        <CardDialog
          card={selectedCard()}
          onClose={() => setSelectedCard(undefined)}
          tellerId={gameData()?.tellerId}
          onTellStory={onTellStory}
          onPutCardToTable={onPutCardToTable}
          onVote={onVote}
          choseCard={!!findIfChoseCardToTable(authState?.user?.uid)}
          voted={!!findIfVoted(authState?.user?.uid)}
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
                  {(score: scoreInterface) => {
                    const isTeller = score.playerId === gameData()?.tellerId
                    const choseCardToTable = findIfChoseCardToTable(
                      score.playerId
                    )
                    const getPlayerName = gameData()?.players.find(
                      (p: playerInterface) => p?.id === score.playerId
                    ).username
                    return (
                      <Grid item>
                        <Typography
                          variant="body2"
                          color={isTeller ? "primary" : "text.primary"}
                        >
                          {getPlayerName}
                          <Show when={isTeller}>{" (teller)"}</Show>
                          <Show
                            when={
                              gameData()?.phase === "putCardToTable" &&
                              !isTeller &&
                              !choseCardToTable
                            }
                          >
                            {" (waiting...)"}
                          </Show>
                        </Typography>
                        <Box textAlign="center">{score.score}</Box>
                      </Grid>
                    )
                  }}
                </For>
              </Grid>
            </Paper>
            <Typography py={2} fontWeight={600}>
              <Switch>
                <Match when={gameData()?.phase === "tellStory"}>
                  Waiting for teller to tell story...
                </Match>
                <Match when={gameData()?.phase === "putCardToTable"}>
                  The story is: "{gameData()?.story.sentence}" <br />
                  Other players please choose a card to the table.
                </Match>
                <Match when={gameData()?.phase === "vote"}>
                  Other players please vote for the teller card.
                </Match>
              </Switch>
            </Typography>
            <Grid container justifyContent="center" flexWrap="wrap" spacing={2}>
              <Switch>
                <Match
                  when={
                    gameData()?.phase === "tellStory" ||
                    gameData()?.phase === "putCardToTable"
                  }
                >
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
                </Match>
                <Match
                  when={
                    gameData()?.phase === "vote" ||
                    gameData()?.phase === "result"
                  }
                >
                  <For each={gameData()?.tableCards}>
                    {(tcard: tableCardInterface) => (
                      <Grid item>
                        <Box
                          component="img"
                          src={tcard.card?.url}
                          alt="card"
                          borderRadius={4}
                          sx={{
                            objectFit: "cover",
                            width: (250 * 2) / 3,
                            height: 250,
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setSelectedCard(tcard.card)
                          }}
                        />
                      </Grid>
                    )}
                  </For>
                </Match>
              </Switch>
            </Grid>
          </Match>
        </Switch>
      </Container>
    </Layout>
  )
}

export default GameBoard
