import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import icon from '../assets/icon.png';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await api.post('/users/login', { email, password });
      console.log('Login successful:', response.data);
      // 로그인 성공 시 홈 페이지로 이동
      navigate('/');
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      setError(error.response?.data?.error || '로그인에 실패했습니다.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10">
      <div className="w-full max-w-xs">
        <img src={icon} alt="앱 아이콘" className="mx-auto mb-6 w-40 h-40" />
        <h1 className="text-2xl font-bold text-center mb-4">
          로그인하고 가치있는 선택을 <br />시작해보세요
        </h1>
        <form
          className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              이메일
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="example@gachi.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              비밀번호
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="*****"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          <div className="flex items-center justify-between w-full">
            <button
              className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              로그인
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 text-m">
          아직 가치의 회원이 아니신가요? <Link to="/register" className="text-blue-500 ml-3">회원가입</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
