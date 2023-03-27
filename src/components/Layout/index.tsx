import AppBar from "./AppBar"
import { ParentComponent } from "solid-js"

import { Box, Button, Container, Typography, Stack } from "@suid/material"

const Layout: ParentComponent = ({ children }) => {
  return (
    <Box bgcolor={"#f0e7db"}>
      <AppBar />
      <Box minHeight={"calc(100vh - 80px)"} pt={10}>
        {children}
      </Box>
    </Box>
  )
}

export default Layout
