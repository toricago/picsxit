import { Button, Dialog, DialogContent, Box, TextField } from "@suid/material"
import { Match, Switch, Show, createSignal } from "solid-js"
import { cardInterface } from "../hooks/useGameBoard"

import { authState } from "../App"

interface Props {
  card?: cardInterface | null
  onClose: () => void
  onTellStory: any
  onVote: any
  onPutCardToTable: any
  tellerId: string
  choseCard: boolean
  voted: boolean
  phase: "tellStory" | "putCardToTable" | "vote" | "result"
}

export default function CardDialog(props: Props) {
  const [sentence, setSentence] = createSignal("")

  const checkTeller = () => {
    if (authState.user?.uid === props.tellerId) {
      return true
    }
    return false
  }

  const handleTellStory = () => {
    props.onTellStory({ number: props.card?.number, sentence: sentence() })
  }

  const handlePutCardToTable = () => {
    props.onPutCardToTable()
  }

  const handleVote = () => {
    props.onVote()
  }

  return (
    <Dialog open={!!props.card?.url} onClose={props.onClose}>
      <DialogContent>
        <Box
          component="img"
          src={props.card?.url}
          alt="card"
          borderRadius={4}
          sx={{
            objectFit: "cover",
            width: (400 * 2) / 3,
            height: 400,
            cursor: "pointer",
          }}
        />
      </DialogContent>
      <Box pb={3} textAlign="center">
        <Switch>
          <Match when={props.phase === "tellStory" && checkTeller()}>
            <Box px={3} mb={2}>
              <TextField
                fullWidth
                size="small"
                placeholder="sentence"
                onKeyUp={(el: any) => {
                  setSentence(el.target.value)
                }}
              />
            </Box>
            <Button
              variant="contained"
              disabled={!sentence()}
              onClick={handleTellStory}
            >
              confirm
            </Button>
          </Match>
          <Match
            when={
              props.phase === "putCardToTable" &&
              !checkTeller() &&
              !props.choseCard
            }
          >
            <Button variant="contained" onClick={handlePutCardToTable}>
              confirm
            </Button>
          </Match>
          <Match
            when={props.phase === "vote" && !checkTeller() && !props.voted}
          >
            <Button variant="contained" onClick={handleVote}>
              confirm
            </Button>
          </Match>
        </Switch>
      </Box>
    </Dialog>
  )
}
