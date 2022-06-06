import React from 'react'

const ContactCard = (props) => {
  const { id, name, email } = props.contacts
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center border p-3 mt-3">
        <div>
          <p>{name}</p>
          <p>{email}</p>
        </div>
        <div>
          <button onClick={() => props.clickRemover(id)} className="btn-danger rounded p-1">remove</button>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
