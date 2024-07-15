import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import icon from '../assets/icon.png';
import api from '../services/api'; // API 서비스 임포트

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await api.post('/users/signup', { username, email, password });
      console.log('User registered:', response.data);

      // 회원가입이 완료되면 토스트 메시지를 표시합니다.
      setShowToast(true);

      // 일정 시간 후에 토스트 메시지를 숨기고 로그인 페이지로 이동합니다.
      setTimeout(() => {
        setShowToast(false);
        navigate('/signin');
      }, 2000); // 2초 후에 로그인 페이지로 이동
    } catch (error) {
      console.error('Signup error:', error);
      alert('회원가입에 실패했습니다.');
    }
  };

  // const handleRegister = () => {
  //   // 여기에서 회원가입 로직을 처리합니다.
  //   console.log('User registered:', { username, email, password });

  //   // 회원가입이 완료되면 토스트 메시지를 표시합니다.
  //   setShowToast(true);

  //   // 일정 시간 후에 토스트 메시지를 숨기고 로그인 페이지로 이동합니다.
  //   setTimeout(() => {
  //     setShowToast(false);
  //     navigate('/signin');
  //   }, 2000); // 2초 후에 로그인 페이지로 이동
  // };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10">
      <div className="w-full max-w-xs">
        <img src={icon} alt="앱 아이콘" className="mx-auto mb-6 w-40 h-40" />
        <h1 className="text-2xl font-bold text-center mb-4">회원가입</h1>
        <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              사용자 이름
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="이름을 입력하세요"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
          <div className="flex items-center justify-between w-full">
            <button
              className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleRegister}
            >
              회원가입
            </button>
          </div>
        </form>
        {showToast && (
          <div className="fixed top-1/2 left-[45%] transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-4 rounded-lg shadow-lg animate-bounce z-50">
            회원가입을 축하드립니다!
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;
