import { useState } from 'react'
import './App.css'
import Details from './components/Details/Details';
import List from './components/List/List';

function App() {
  const [ selected, setSelected ] = useState(0);


  return (
    <div className="App">
      <List selected={selected} changeSelected={setSelected} />
      <Details selected={selected} />
    </div>
  )
}

export default App
