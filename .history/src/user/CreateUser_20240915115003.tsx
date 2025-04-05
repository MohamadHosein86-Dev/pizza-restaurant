import { useState } from 'react';
import { useNavigation } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();
  const issubmit = navigation.state == "submitting";
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
