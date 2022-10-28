import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
const myStyle = {
  border: '3px solid red', margin: ' 10px',
  backgroundColor: 'hotpink'
};

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>


    </div>
  );
}

const ExternalUsers = () => {
  //If we want to use state. Here the state is to fetch data  
  const [users, setUser] = useState([]);
  //use effect to fetch data
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      //passing data to setUser parameter set data to users array
      .then(data => setUser(data))
  }, []);
  //Return div to its corresponding <ExternalUser> tag
  return (
    <div style={{ borderBottom: '2px solid black' }}>
      <h1>External Users Names & Emails </h1>
      <h3>Number Of Users:{users.length} </h3>
      {/* setting users array item to <user> element */}
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
const User = (props) => {
  return (
    <div style={myStyle}>
      <h2>Name:{props.name} </h2>
      <p>Email:{props.email}</p>
    </div>
  )
}


///function for counter
// function Counter() {
//   const [count, setCount] = useState(0);

//   const increaseCount = () => setCount(count + 1);
//   const decreaseCount = () => setCount(count - 1);

//   // const increaseCount = () => {
//   //   const newCount = count + 1;
//   //   setCount(newCount);
//   // }


//   return (
//     <div className="counter">
//       <h1>Count:{count} </h1>
//       <button onClick={increaseCount}>Increase count</button>
//       <button onClick={decreaseCount}>Decrease count</button>
//     </div>
//   )

// }

export default App;
