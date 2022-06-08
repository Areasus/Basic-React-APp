import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card-c' style={{padding:"1rem",borderRadius:"10px"}}>
        <h1>{props.content}</h1>
        <h2>{props.content1}</h2>
    </div>
  )
}

export default Card