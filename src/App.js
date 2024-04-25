import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Users from './Users';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
