import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Filters from './Filters';
import SocialCard from './SocialCard';

function App() {

  const [users ,setUsers]=useState([]);
  

  
  useEffect(()=>{
    (async()=>{
      let userData;
      try{
        const response = await fetch('https://nodedummyapicall.herokuapp.com/dummy');
        userData = (await response.json());
      }catch(err){
        console.log(err);
        userData = [];
      }
     
      setUsers(userData);
    })();
  }, []);

  // const filterCards = event => {
  //   const value = event.target.value.toLowerCase();
  //   const filterUsers = allusers.filter(
  //     user => (`${user.name.first} ${user.name.last}`.toLowerCase().includes(value))
  //   );
  //     setUsers(filterUsers);
  // };

  return (
    <div className="App">
      <Header/>
      <Filters/>
      {/* <input className="search-box" placeholder="Search..." onInput={filterCards}/> */}
      <div className="cards-container">
        {users.map((user, index) => (
          <SocialCard userData={user} key={index}/>       
        ))}
      </div>
    </div>
  );
}

export default App;
