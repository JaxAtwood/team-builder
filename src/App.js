import React, { useState } from 'react';
import data from "./components/RockerData";
import RockerForm from "./components/RockerForm"; 
import RockerList from "./components/RockerList";


function App() {
  const [thing, setThing] = useState(data);
  const addNewRocker = form => {
    setThing([...thing, form]);
  };
  return (
    <div className="App">
      <h1> Favorite Rockers!! </h1>
      <RockerForm addNewRocker={addNewRocker}/>
      <RockerList theList={thing}/>
    </div>
  );
}

export default App;
