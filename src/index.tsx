import { render } from "solid-js/web"
import App from "./App"
import "./index.css"
import { createTheme, ThemeProvider } from "@suid/material/styles"
import { Router } from "@solidjs/router"
import { purple } from "@suid/material/colors"

const theme = createTheme({
  palette: {
    // mode: "dark",
    primary: {
      // Purple and green play nicely together.
      main: "#F50057",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
    info: {
      main: "#F50057",
    },
  },
  typography: {
    fontFamily: [
      "Libre Baskerville",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
    ].join(","),
  },
})

const MyApp = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  )
}

render(() => <MyApp />, document.getElementById("root") as HTMLElement)
