import { Button, Dialog, DialogContent, Box } from "@suid/material"
import { cardInterface } from "../hooks/useGameBoard"

interface Props {
  card?: cardInterface | null
  onClose: () => void
  onTellStory: any
  onVote: any
  onChooseCard: any
  phase: "tellStory" | "putCardToTable" | "vote" | "result"
}

export default function CardDialog(props: Props) {
  let sentence: string = "test"

  const handleTellStory = () => {
    props.onTellStory({ number: props.card?.number, sentence: sentence })
  }

  const handleClick = () => {
    return props.phase === "tellStory" && handleTellStory()
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
        <Button variant="contained" onClick={handleClick}>
          confirm
        </Button>
      </Box>
    </Dialog>
  )
}
