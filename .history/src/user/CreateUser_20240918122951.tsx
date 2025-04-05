import { useState } from 'react';
import Btn from '../comonentsRusing/Btn';


function CreateUser() {
  const [username, setUsername] = useState('');
 
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="text-center mt-8 ">
      <p className='sm:text-2xl  font-semibold  mb-1 '>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="bg-slate-500  rounded-lg  pr-2 pl-2 pb-2 pt-1  sm:w-72"
      />

      {username !== '' && (
        <>
          <Btn disabled={}>Start ordering</Btn>
        </>
      )}
    </form>
  );
}

export default CreateUser;
