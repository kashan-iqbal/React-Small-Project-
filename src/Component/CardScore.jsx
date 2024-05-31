import { Badge } from '@chakra-ui/react'
import React from 'react'

const CardScore = ({score}) => {

  return (
    <Badge >{score}</Badge>
  )
}

export default CardScore