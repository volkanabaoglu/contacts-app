import React from 'react'
import List from './List'
import Form from './Form'
import "./styles.css"
import { useState , useEffect} from 'react'

const Contacts = () => {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        console.log(contacts)
    }, [contacts]);

  return (
    <div id='container'>
        <h1>Contacts List</h1>
        
        
        <Form addContact={setContacts} contacts={contacts} />
        <br /><br />
        <List contacts={contacts}/>
    </div>
  )
}

export default Contacts