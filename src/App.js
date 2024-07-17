import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Mypage from './pages/Mypage';
import Gonggu from './pages/Gonggu';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Upload from './pages/Upload';  // Upload 컴포넌트 import
import './App.css';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      <Header isHomePage={isHomePage} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/gonggu" element={<Gonggu />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<Upload />} /> 
      </Routes>
    </div>
  );
}

export default App;
