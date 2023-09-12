import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from "./components/SelectedContact";



function App() {
  const [SelectedContactId, setSelectedContactId] = useState(null);

  

  return (
    <>
    {SelectedContactId ? (
      <div>Selected Contact View</div>
    ) : (
      <ContactList/>
    )}
    </>
  );
}

export default App
