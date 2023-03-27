import {
  addDoc,
  collection,
  getDoc,
  doc,
  onSnapshot,
  updateDoc,
  DocumentData,
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

interface LobbyDocument {
  host: string
  players: playerInterface[]
  lobbyState: "lobby" | "game" | "result"
  created: Date
}

export default function useLobby() {
  const navigate = useNavigate()

  async function createLobby() {
    const doc = await addDoc(collection(db, "lobby"), {
      host: authState?.user?.uid,
      players: [],
      lobbyState: "lobby",
      created: Timestamp.now(),
    })

    return doc.id
  }

  function getLobby(id: string) {
    const [data, setData] = createSignal<DocumentData>()

    const docRef = doc(db, "lobby", id)

    getDoc(docRef)
      .then((doc) => setData({ ...doc.data(), id: doc.id }))
      .catch((err) => {
        toast.error("Can't find the lobby!", { duration: 5000 })
        navigate("/", { replace: true })
      })

    onSnapshot(docRef, (snapshot) => {
      setData((prev) => ({ ...prev, ...snapshot.data() }))
    })

    return data
  }

  async function joinLobby(lobbyid: string, players: playerInterface[]) {
    const docRef = doc(db, "lobby", lobbyid)
    updateDoc(docRef, { players: players })
      .then((docRef) => {
        console.log("Join lobby successfully!")
      })
      .catch((error) => {
        toast.error("Can't join the lobby, please try again", {
          duration: 5000,
        })
      })
  }

  function leaveLobby(lobbyid: string, players: playerInterface[]) {
    const docRef = doc(db, "lobby", lobbyid)
    updateDoc(docRef, { players: players })
      .then((docRef) => {
        console.log("leave lobby successfully!")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return { createLobby, getLobby, joinLobby, leaveLobby }
}
