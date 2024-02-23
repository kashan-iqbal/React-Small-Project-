import React from 'react'
import Hoc from './Hoc'

const Increment = ({value,inCrement}) => {

  return (
    <div>{value}
    <button onClick={inCrement}>click</button>
    </div>

  )
}

export default Hoc(Increment)
