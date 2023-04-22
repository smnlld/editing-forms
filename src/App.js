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
      <div className=' h-1'> 
      <p className='justify-center items-center relative flex text-4xl font-mono'>Simon Ullado</p>
      <p className='justify-center items-center relative flex text-2xl font-mono'>4ITF</p>
      </div>
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
