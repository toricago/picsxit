import { Box, CircularProgress } from "@suid/material"

const Loading = () => (
  <Box
    height={400}
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <CircularProgress size={50} thickness={5} />
  </Box>
)

export default Loading
