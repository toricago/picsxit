import AppBar from "./AppBar"
import { ParentComponent } from "solid-js"

import { Box, Button, Container, Typography, Stack } from "@suid/material"

type LayoutProps = {
  bgcolor?: string
}

const Layout: ParentComponent<LayoutProps> = ({ children, bgcolor }) => {
  return (
    <Box bgcolor={bgcolor}>
      <AppBar />
      <Box minHeight={"calc(100vh - 160px)"} py={10}>
        {children}
      </Box>
    </Box>
  )
}

export default Layout
