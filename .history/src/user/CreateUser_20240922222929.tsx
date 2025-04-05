import { useState } from 'react';
import Btn from '../comonentsRusing/Btn';
import { useDispatch, useSelector } from 'react-redux';
import { updatename } from './UserSlice';

interface typex{
  userName :{
    username:string
  }
}
function CreateUser() {
 
 
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  const dispatch = useDispatch()
  const {username} =useSelector((res:typex)=>res.userName)
  return (
    <form onSubmit={handleSubmit} className="text-center mt-8 ">
      <p className='sm:text-2xl  font-semibold  mb-1 '>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        onChange={(e) =>dispatch(updatename(e.target.value)) }
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
