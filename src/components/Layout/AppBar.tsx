import AppBar from "@suid/material/AppBar"
import Box from "@suid/material/Box"
import Toolbar from "@suid/material/Toolbar"
import IconButton from "@suid/material/IconButton"
import Typography from "@suid/material/Typography"
import Container from "@suid/material/Container"
import Button from "@suid/material/Button"
import AdbIcon from "@suid/icons-material/Adb"

import { Switch, Match } from "solid-js"
import { useNavigate } from "@solidjs/router"

import { authState } from "../../App"
import { signOut } from "../Login"

function ResponsiveAppBar() {
  const navigate = useNavigate()
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "transparent",
        //  backdropFilter: "blur(10px)",
        zIndex: 10,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,

              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PICSXIT
          </Typography>
          <Switch>
            <Match when={authState.user}>
              <Button
                color="inherit"
                sx={{ ml: "auto" }}
                onClick={() => {
                  navigate("/")
                  signOut()
                }}
              >
                Logout
              </Button>
            </Match>
          </Switch>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
