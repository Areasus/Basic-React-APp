import React, {useState,useEffect} from 'react'
import Card from './Card'
import Item from './Item'

const Home = () => {

  // const [number,setNumber] = useState(0)


//   async function getapi() {
    
//     // Storing response
//     const response = await fetch(`http://127.0.0.1:8000/fruits`);
    
//     // Storing data in form of JSON
//     var data = await response.json();
//     console.log("aayo?")
//     console.log(data);
// }
// // Calling that async function
// getapi();
const [users, setUsers] = useState([])

const fetchData = () => {
  fetch("http://127.0.0.1:8000/fruits")
    .then(response => {
      return response.json()
    })
    .then(data => {
      setUsers(data)
    })
}

useEffect(() => {
  fetchData()
}, [])
  return (
    <>
      <Card content="Our popular products" />
      <div className='items'>
      {users.map(user => (
            <Item url={user.url} title={user.name} desc={user.desc}/>
          ))}
      </div>
      
    </>
  )
}

export default Home