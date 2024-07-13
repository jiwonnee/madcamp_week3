import React from 'react';
import { Link } from 'react-router-dom';

function Header({ isHomePage }) {
  return (
    <header className={`flex justify-between items-center p-4 shadow ${isHomePage ? 'bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200' : 'bg-white'}`}>
      <div className="text-2xl font-bold text-indigo-600 ml-6">
        <Link to="/">GaChi</Link>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/gonggu">공구</Link></li>
          <li><Link to="/wishlist">위시리스트</Link></li>
          <li><Link to="/mypage">Mypage</Link></li>
          <li><Link to="/signin" className="bg-purple-500 text-white px-4 py-2 rounded">로그인</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
