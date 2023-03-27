import {
  addDoc,
  collection,
  getDoc,
  doc,
  onSnapshot,
  updateDoc,
  DocumentData,
  query,
  Timestamp,
} from "firebase/firestore"
import { useNavigate } from "@solidjs/router"
import { createSignal } from "solid-js"

import { authState } from "../App"
import { db } from "../firebase"
import toast from "solid-toast"

interface playerInterface {
  id: string
  username: string
}

interface cardInterface {
  number: number
  url: string
}

interface storyInterface {
  sentence: string
  card: cardInterface[]
}

interface tableCardsInterface {
  playerId: string
  card: cardInterface[]
}

interface voteInterface {
  playerId: string
  number: number
}

interface scoreInterface {
  playerId: string
  score: number
}

interface handInterface {
  playerId: string
  hand: cardInterface[]
}

// collections
interface GameDocument {
  roundsLeft: number
  cards: cardInterface[]
  usedCard: cardInterface[]
  tellerId: string
  story: storyInterface
  tableCards: tableCardsInterface[]
  votes: voteInterface[]
  scores: scoreInterface[]
  hands: handInterface[]
}

interface LobbyDocument {
  host: string
  players: playerInterface[]
  lobbyState: "lobby" | "game" | "result"
  gameState: GameDocument
  created: Date
}

export default function useGameBoard() {
  const navigate = useNavigate()

  function setUpGame(lobbyid: string, players: playerInterface[]) {
    const docRef = doc(db, "lobby", lobbyid)

    const gameStateData = {
      roundsLeft: players.length * 2,
      cards: [],
      usedCard: [],
      tellerId: players[0].id,
      story: {},
      tableCards: [],
      votes: [],
      scores: [],
      hands: [],
    }

    updateDoc(docRef, {
      lobbyState: "game",
      gameState: gameStateData,
      updated: Timestamp.now(),
    })
      .then((docRef) => {
        console.log("Game created successfully!")
        navigate(`/${lobbyid}/game`)
      })
      .catch((error) => {
        toast.error("Can't create game, please try again", {
          duration: 5000,
        })
      })
  }

  function startNewTurn() {}

  function tellStory() {}

  function putCardToTable() {}

  function vote() {}

  function showResult() {}

  function endGame() {}

  function forceSkip() {}

  return { setUpGame }
}
