import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {
  const clickRemover = (id) => { 
    props.getContactId(id)
   }
  const renderContact = props.contacts.map((item) => {
    return (
      <div>
          <ContactCard contacts={item} clickRemover={ clickRemover } key={ item.id } />
      </div>
    )
  })
  return (
    <div>
      <span>{renderContact}</span>
    </div>
  )
}

export default ContactList
