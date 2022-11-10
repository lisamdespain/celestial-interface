/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import DataCard from './DataCard';


function App() {
  const [data, setData] = useState([]);
  useEffect(() =>{
    axios.get('https://data.cityofnewyork.us/resource/bmxf-3rd4.json')
    .then(res =>{
      setData(res.data);
    }).catch(err =>{
      err.status(err.status);
  })}, [])

console.log(data);
  return (
    <div className="App">
      <img src="https://images.ctfassets.net/81iqaqpfd8fy/43n1LWlPbi64oaeiQeUiQ0/d3d9c4a5582ff7d74899dcbb032af692/Homeless.jpg?h=620&w=1440" alt="picture of homeless girl" />
      <div className="card">
        {data.map(shelter => (
        <DataCard key={shelter.BIN} data={shelter} />
        ))}
      </div>
    </div>

  );
}

export default App;
