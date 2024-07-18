import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../index.css';
import { AuthContext } from '../context/AuthContext'; // AuthContext 임포트

function Header({ isHomePage }) {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault(); // 링크의 기본 동작을 막습니다.
    logout();
    navigate('/');
  };

  return (
    <header className={`flex justify-between items-center p-4 shadow ${isHomePage ? 'bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200' : 'bg-white'}`}>
      <div className="ml-6">
        <Link to="/">
          <img src={logo} alt="GaChi Logo" className="w-24 h-8" />
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-4 custom-font-3">
          <li><Link to="/gonggu">공구</Link></li>
          <li><Link to="/mypage">Mypage</Link></li>
          {isAuthenticated ? (
            <li>
              <Link to="/" onClick={handleLogout} className="bg-purple-500 text-white px-4 py-2 rounded text-center">
                로그아웃
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/signin" className="bg-purple-500 text-white px-4 py-2 rounded text-center">
                로그인
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
