import React from 'react'
import './Item.css'
import { useState } from 'react'

const Item = (props) => {

  const [number,setNumber] =useState(0)
  const decreaseNumber = () => {
    if(number>1)
    {
      setNumber(number-1)
    }
  }
  return (
    <div className='item'>
      <img src={props.url} alt='alt'></img>
      <hr/>
      <div className='card-head'>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <div className='card-container'>
          <button onClick={()=>decreaseNumber()}>-</button>
          <span>{number}</span>
          <button onClick={ ()=> setNumber(number+1)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default Item