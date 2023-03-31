import { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [excuse, setExcuse] = useState('')

  const fetchData = (excuseType) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuseType}/`).then((res) => {
      setExcuse(res.data[0].excuse)
    })
  }

  // useEffect(() => {
  //   fetchData('party')

  // }, [])

  // const excuseParty = () => {
  //   Axios.get('https://excuser-three.vercel.app/v1/excuse/party/').then((res) => {
  //     setExcuse(res.data[0].excuse)
  //   })
  //   // fetchData('party')
  // }

  // const excuseFamily = () => {
  //   Axios.get('https://excuser-three.vercel.app/v1/excuse/family/').then((res) => {
  //     setExcuse(res.data[0].excuse)
  //   })
  // }

  // const excuseOffice = () => {
  //   Axios.get('https://excuser-three.vercel.app/v1/excuse/office/').then((res) => {
  //     setExcuse(res.data[0].excuse)
  //   })
  // }

  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <button onClick={() => fetchData('party')}>Party</button>
      <button onClick={() => fetchData('family')}>Family</button>
      <button onClick={() => fetchData('office')}>Office</button>
      {/* <button onClick={excuseParty}>Party</button> */}
      {/* <button onClick={excuseFamily}>Family</button> */}
      {/* <button onClick={excuseOffice}>Office</button> */}
      <p>Excuse: {excuse}</p>
    </div >
  );
}

export default App;

