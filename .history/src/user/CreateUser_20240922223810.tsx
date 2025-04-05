import Btn from '../comonentsRusing/Btn';
import { useDispatch } from 'react-redux';

import { useState } from 'react';
import { updatename } from './UserSlice';


function CreateUser() { 
  const dispatch = useDispatch();

  const [username ,setusername]=useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(updatename(username))
  }
  return (
    <form onSubmit={handleSubmit} className="text-center mt-8 ">
      <p className='sm:text-2xl  font-semibold  mb-1 '>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        onChange={(e) =>setusername(e.target.value) }
        className="input w-56 mb-4 sm:w-72"
      />

      {username !== '' && (
        <div>
          <Btn type="" to="" disabled={false}>Start ordering</Btn>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
