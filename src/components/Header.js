import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // 로고 이미지 경로를 맞춰주세요
import '../index.css';

function Header({ isHomePage }) {
  return (
    <header className={`flex justify-between items-center p-4 shadow ${isHomePage ? 'bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200' : 'bg-white'}`}>
      <div className="ml-6">
        <Link to="/">
          <img src={logo} alt="GaChi Logo" className="w-24 h-8" /> {/* 로고 이미지 */}
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-4 custom-font-3">
          <li><Link to="/gonggu">공구</Link></li>
          <li><Link to="/mypage">Mypage</Link></li>
          <li><Link to="/signin" className="bg-purple-500 text-white px-4 py-2 rounded">로그인</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
