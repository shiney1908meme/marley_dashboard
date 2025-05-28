import type React from "react"
import { Box, CircularProgress, Typography } from "@mui/material"

interface RefinedLoadingProps {
  text?: string
  size?: number
}

const RefinedLoading: React.FC<RefinedLoadingProps> = ({ text, size = 40 }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%" width="100%">
      <CircularProgress size={size} />
      {text && (
        <Typography variant="body2" color="textSecondary" mt={2}>
          {text}
        </Typography>
      )}
    </Box>
  )
}

export default RefinedLoading
