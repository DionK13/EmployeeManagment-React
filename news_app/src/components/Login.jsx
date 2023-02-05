import React, { useState } from 'react';
import axios from 'axios';

export const LoginForm=()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const data = JSON.stringify({
            Email: email,
            Password: password
            });
            const response = await axios.post('https://localhost:44301/api/Login', data, {
            headers: {
            'Content-Type': 'application/json'
            }
            });

      console.log(response.status);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}
