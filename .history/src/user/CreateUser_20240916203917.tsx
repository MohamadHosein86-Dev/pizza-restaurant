import { useState } from 'react';


function CreateUser() {
  const [username, setUsername] = useState('');
 
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="text-center mt-8 mb-8">
      <p className='sm:text-2xl font-semibold mb-6'>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="bg-slate-500 rounded-lg pr-2 pl-2 pb-2 pt-1 sm:w-72"
      />

      {username !== '' && (
        <div>
          <button>Start ordering</button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
