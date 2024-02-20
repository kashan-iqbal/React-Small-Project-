import React from 'react'

const Suggestion = ({data,func}) => {
  return (
    <div>
      {
        data.length && data.map((d,idx)=>(
          <li key={idx} onClick={() => func(d)} >{d}</li>
        ))
      }
    </div>
  )
}

export default Suggestion