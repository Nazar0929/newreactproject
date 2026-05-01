import { useState } from 'react'
import './App.css'
import PageBoard from './components/PageBoard/PageBoard';
import Event from './components/Eventss/Event';
import events from "./upcomingevents.json";

function App() {
  return ( 
  <PageBoard events={events} />

  )
}
export default App
