import './App.css'
import React, { useState, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

function App() {
  const LOCAL_STORAGE_KEY = 'contactList'
  const [contacts, setContacts] = useState([])

  const contactGetter = (contact) => {
    console.log(contact)
    setContacts([...contacts, { id: uuidv4(), ...contact }])
  }

  const removeContact = (id) => { 
    const newContact = contacts.filter((contact) => {
      return contact.id !== id;
    })

    setContacts(newContact);
   }

  useEffect(() => {
    const getContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (getContacts) setContacts(getContacts)
  }, [])

  useEffect(() => {
    if (contacts.length > 0) {
      const formatContacts = JSON.stringify(contacts)
      localStorage.setItem(LOCAL_STORAGE_KEY, formatContacts)
    }
  }, [contacts])

  return (
    <div className="App main-wrapper">
      <div>
        <Header />
        <AddContact contactGetter={contactGetter} />
        <ContactList contacts={contacts} getContactId={removeContact} />
      </div>
    </div>
  )
}

export default App
