import { Box } from '@chakra-ui/react'

const GameCardContainer = ({children}) => {
  return (
    <Box borderRadius={10} overflow={"hidden"}  Height="300px" width="100%">
        {children}
    </Box>
  )
}

export default GameCardContainer