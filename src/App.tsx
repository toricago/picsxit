import {
  Component,
  createEffect,
  lazy,
  createSignal,
  Switch,
  Match,
} from "solid-js"
import { Routes, Route } from "@solidjs/router"
import { Toaster } from "solid-toast"
import { app } from "./firebase"
import { useNavigate } from "@solidjs/router"
import { signIn } from "./components/Login"

import useAuth from "./hooks/useAuth"
const Main = lazy(() => import("./pages/index"))
const Lobby = lazy(() => import("./pages/Lobby"))
const GameBoard = lazy(() => import("./pages/Game"))

export const authState = useAuth(app)

const ProtectedRoute = (Component: Component) => () => {
  const [valid, setValid] = createSignal(false)
  const navigate = useNavigate()

  createEffect(() => {
    if (!authState.loading && !authState.user) {
      signIn()
        .then(() => setValid(true))
        .catch(() => navigate("/"))
    } else {
      setValid(true)
    }
  })

  return (
    <Switch>
      <Match when={!valid()}>
        <div></div>
      </Match>
      <Match when={valid()}>
        <Component />
      </Match>
    </Switch>
  )
}

const App: Component = () => {
  return (
    <div>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" component={Main} />
        <Route path="/:id" component={ProtectedRoute(Lobby)} />
        <Route path="/:id/game" component={ProtectedRoute(GameBoard)} />
      </Routes>
    </div>
  )
}

export default App
