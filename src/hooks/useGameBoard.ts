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

import { cardList } from "../constants"

export interface playerInterface {
  id: string
  username: string
}

export interface cardInterface {
  number: number
  url: string
}

export interface storyInterface {
  sentence: string
  number: number
}

export interface tableCardInterface {
  playerId: string
  card?: cardInterface
}

interface voteInterface {
  playerId: string
  number: number
}

export interface scoreInterface {
  playerId: string
  score: number
}

export interface handInterface {
  playerId: string
  hand: cardInterface[]
}

// collections
export interface GameDocument {
  players: playerInterface[]
  phase: "tellStory" | "putCardToTable" | "vote" | "result"
  roundsLeft: number
  cards: cardInterface[]
  usedCards: cardInterface[]
  tellerId: string
  story: storyInterface | null
  tableCards: tableCardInterface[]
  votes: voteInterface[]
  scores: scoreInterface[]
  hands: handInterface[]
}

const shuffleAndMapCards = (cardList: string[]) => {
  const _cardList = cardList.sort(() => Math.random() - 0.5)
  const mappedIndex = _cardList.map((card, index) => ({
    number: index,
    url: card,
  }))
  return mappedIndex
}

const makeHand = (cardList: cardInterface[], playerIndex: number) => {
  return cardList.slice(playerIndex * 6, (playerIndex + 1) * 6)
}

export default function useGameBoard() {
  const navigate = useNavigate()

  async function setUpGame(lobbyid: string, players: playerInterface[]) {
    const lobbyRef = doc(db, "lobby", lobbyid)
    const gameCol = collection(db, "game")

    const playersLength = players.length
    const shuffleCard = shuffleAndMapCards(cardList)

    const hands = players.map((p, i) => ({
      playerId: p.id,
      hand: makeHand(shuffleCard, i),
    }))

    const scores = players.map((p, i) => ({
      playerId: p.id,
      score: 0,
    }))

    const cardsPile = shuffleCard.slice(playersLength * 6)

    const gameStateData: GameDocument = {
      players: players,
      roundsLeft: players.length * 2,
      cards: cardsPile,
      usedCards: [],
      phase: "tellStory",
      tellerId: players[0].id,
      story: null,
      tableCards: [],
      votes: [],
      scores: scores,
      hands: hands,
    }

    // create game
    const createGameDoc = await addDoc(gameCol, {
      ...gameStateData,
      created: Timestamp.now(),
    })

    // create lobby
    updateDoc(lobbyRef, {
      lobbyState: "game",
      gameId: createGameDoc.id,
      updated: Timestamp.now(),
    })
      .then((docRef) => {
        console.log("Game created successfully!")
      })
      .catch((error) => {
        toast.error("Can't create game, please try again", {
          duration: 5000,
        })
      })
  }

  function getGame(id: string) {
    const [data, setData] = createSignal<DocumentData>()

    const docRef = doc(db, "game", id)

    getDoc(docRef)
      .then((doc) => setData({ ...doc.data(), id: doc.id }))
      .catch((err) => {
        toast.error("Can't find the game!", { duration: 5000 })
        navigate("/", { replace: true })
      })

    onSnapshot(docRef, (snapshot) => {
      setData((prev) => ({ ...prev, ...snapshot.data() }))
    })

    return data
  }

  function startNewTurn() {}

  function tellStory(
    gameid: string,
    story: storyInterface,
    hands: handInterface[],
    tableCards: tableCardInterface[]
  ) {
    const gameRef = doc(db, "game", gameid)
    // create lobby
    updateDoc(gameRef, {
      story,
      hands,
      tableCards,
      phase: "putCardToTable",
      updated: Timestamp.now(),
    })
      .then((docRef) => {
        console.log("update successfully!")
      })
      .catch((error) => {
        toast.error("error occured, please try again", {
          duration: 5000,
        })
      })
  }

  function putCardToTable(
    gameid: string,
    hands: handInterface[],
    tableCards: tableCardInterface[],
    isLast: boolean
  ) {
    const gameRef = doc(db, "game", gameid)
    let data: any = {
      hands,
      tableCards,
      updated: Timestamp.now(),
    }
    // if last player put card to table change to vote
    if (isLast) {
      data.phase = "vote"
    }
    // create lobby
    updateDoc(gameRef, data)
      .then((docRef) => {
        console.log("update successfully!")
      })
      .catch((error) => {
        toast.error("error occured, please try again", {
          duration: 5000,
        })
      })
  }

  function vote(gameid: string, votes: voteInterface[], isLast: boolean) {
    const gameRef = doc(db, "game", gameid)

    let data: any = {
      votes,
      updated: Timestamp.now(),
    }

    // if last player put card to table change to vote
    if (isLast) {
      data.phase = "result"
    }
    // create lobby
    updateDoc(gameRef, data)
      .then((docRef) => {
        console.log("update successfully!")
      })
      .catch((error) => {
        toast.error("error occured, please try again", {
          duration: 5000,
        })
      })
  }

  function showResult() {}

  function endGame() {}

  function forceSkip() {}

  return { setUpGame, getGame, tellStory, putCardToTable, vote }
}
