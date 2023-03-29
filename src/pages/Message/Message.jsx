import React from 'react';
import './Message.css';
import m1 from "../../Assets/m1.png"
import m2 from "../../Assets/m2.png"
import m3 from "../../Assets/m3.png"

function Messaging() {
  const contacts = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      message: 'Hey, how are you?',
      avatar: m1,
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@gmail.com',
      message: 'Can we meet up later?',
      avatar: m2,
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bobjohnson@gmail.com',
      message: 'See you soon!',
      avatar: m3,
    },
    
    {
      id: 4,
      name: 'Jane Smith',
      email: 'janesmith@gmail.com',
      message: 'Can we meet up later?',
      avatar: m2,
    },
    {
      id: 5,
      name: 'Bob Johnson',
      email: 'bobjohnson@gmail.com',
      message: 'See you soon!',
      avatar: m3,
    },
    {
      id: 6,
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      message: 'Hey, how are you?',
      avatar: m1,
    },
  ];

  return (
    <div className="messaging">
      <h1 className='contctmsg'>Contacts</h1>
      <div className="card-container">
        {contacts.map((contact) => (
          <div className="card" key={contact.id}>
            <img className="avatar" src={contact.avatar} alt="avatar" />
            <div className="info">
              <h3>{contact.name}</h3>
              <p>{contact.email}</p>
              <p>{contact.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messaging;