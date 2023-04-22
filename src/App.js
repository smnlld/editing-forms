import React, { useState } from 'react';
import './App.css'

import EditGreeting from './components/EditGreeting';
import DisplayGreeting from './components/DisplayGreeting';

function Greeting() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isEditing, setIsEditing] = useState(true);

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  return (
    <div className='bg-[#675D50] h-screen'>
      {isEditing ? (
        <EditGreeting
          firstName={firstName}
          lastName={lastName}
          onSave={handleSave}
          onChangeFirstName={handleChangeFirstName}
          onChangeLastName={handleChangeLastName}
        />
      ) : (
        <DisplayGreeting
          firstName={firstName}
          lastName={lastName}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
}

export default Greeting;
