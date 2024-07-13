import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Mypage from './pages/Mypage';
import Gonggu from './pages/Gonggu';
import Wishlist from './pages/Wishlist';
import SignIn from './pages/SignIn';
import Register from './pages/Register'; // Register 컴포넌트 import
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
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} /> {/* Register 페이지 라우트 추가 */}
      </Routes>
    </div>
  );
}

export default App;
