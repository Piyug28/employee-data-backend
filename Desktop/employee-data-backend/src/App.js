import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<div>Admin Dashboard</div>} />
        <Route path="/hr" element={<div>HR Dashboard</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
