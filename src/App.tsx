import React, { useEffect, useState } from 'react';
import './App.css';

import List from './components/List';

const initialState = [
  {
    nick: "dapelu",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "Moderador a veces"
  },
  {
    nick: "sergio_serrano",
    subMonths: 7,
    avatar: "https://i.pravatar.cc/150?u=sergio_serrano"
  }
]
interface Sub {
  nick: string,
  subMonths: number,
  avatar: string,
  description?: string
}

interface AppState {
  subs: Array<Sub>,
  newSubsNumber: Number
}

function App() {
  const [subs, setSubs] = useState <AppState["subs"]> ([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)

  useEffect(() => {
    setSubs(initialState)
  }, [])


  return (
    <div className="App">
      <h1>midu subs</h1>
      <List subs={subs} />
    </div>
  );
}

export default App;
