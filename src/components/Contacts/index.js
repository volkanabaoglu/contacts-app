import React from 'react'
import List from './List'
import Form from './Form'
import { useState , useEffect} from 'react'

const Contacts = () => {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        console.log(contacts)
    }, [contacts]);

  return (
    <div>
        <List />
        <br /><br />
        <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts