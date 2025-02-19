import React, { useState, useEffect } from 'react';
import './App.css';

function App() {  
const [gadget, setGadget] = useState([]);
  const fetchData = () => {
    fetch(`https://api.restful-api.dev/objects`)
    .then((res) => res.json())
    .then((json) => setGadget(json))
    .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchData()
  }, []);
  
return ( 
  <div className='App'>
    <h1 style={{color:"blue", textAlign:"center", marginTop:"20px"}}>Gadgets Table</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Data</th>
        </tr>
      </thead>
    <tbody>
      {gadget.map((gadgetInfo) => (
        <tr key={gadgetInfo.id}>
        <td>{gadgetInfo.id}</td>
        <td>{gadgetInfo.name}</td>
        <td>
        {gadgetInfo.data ? (
          <ul>
            {Object.keys(gadgetInfo.data).map((key,index) => (
              <tr key={index}>{key}:{gadgetInfo.data[key]}</tr>
            ))}
          </ul>
            ):(
          <h4> no available data </h4>
          )}
         </td>
        </tr>
      ))}
    </tbody>
    </table>
  </div> 
)
}

export default App;
