import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', {
        username, password
      });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.role);

      if(res.data.role === 'admin') navigate('/admin');
      else navigate('/hr');
    } catch(err) {
      alert(err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" placeholder="Username" required onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
