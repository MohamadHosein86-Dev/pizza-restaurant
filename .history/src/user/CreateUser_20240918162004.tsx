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
        className="input w-56 mb-4"
      />

      {username !== '' && (
        <div>
          <Btn to="" disabled={false}>Start ordering</Btn>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
