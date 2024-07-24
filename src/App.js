import React, { useState, useEffect } from 'react';
import './App.css';

function App() {  
const [gadget, setGadget] = useState([]);
const [searchInput, setSearchInput] = useState("");
const [filteredInput, setFilteredInput] = useState([]);

  const fetchData = () => {
    fetch(`https://api.restful-api.dev/objects`)
    .then((res) => res.json())
    .then((json) => {
      setGadget(json);
      setFilteredInput(json);
      })
    .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchData()
  }, []);

  const  handleChangeInput = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    filterInput(value);
  }
    const filterInput = (searchInput) => {
    const filtered = gadget.filter((gadgetInfo)=> gadgetInfo.name.toLowerCase().includes(searchInput.toLowerCase()));
    setFilteredInput(filtered);
  } 
  
  
return ( 
  <div className='App'>
    <h1 style={{color:"blue", textAlign:"center", marginTop:"20px"}}>Gadgets Table</h1>
    <div className='search-box'>
      <input type='text' placeholder='search' value={searchInput} onChange={handleChangeInput} />
    </div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Data</th>
        </tr>
      </thead>
    <tbody>
      {filteredInput.map((gadgetInfo) => (
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
