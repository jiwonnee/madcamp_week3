import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPaste } from 'react-icons/fa'; // 붙여넣기 아이콘 추가

function Upload() {
  const navigate = useNavigate();
  const [url, setUrl] = useState('');
  const [people, setPeople] = useState(1);
  const [promotion, setPromotion] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!url || !people || !promotion) {
      setToastMessage('모두 입력해주세요');
      setTimeout(() => setToastMessage(''), 3000);
      return;
    }
    // 여기에 등록 로직을 추가할 수 있습니다.
    // 예를 들어, 서버로 데이터 전송 등의 작업을 수행할 수 있습니다.
    navigate('/'); // 등록 후 홈 페이지로 이동
  };

  const handlePasteClick = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (err) {
      setToastMessage('클립보드에서 텍스트를 읽는 데 실패했습니다.');
      setTimeout(() => setToastMessage(''), 3000);
    }
  };

  const handlePeopleChange = (event) => {
    const value = Math.max(1, parseInt(event.target.value, 10));
    setPeople(value);
  };

  return (
    <div className="flex flex-col items-center p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">1분만에 끝나는 상품 올리기 가이드</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl px-8 pt-6 pb-8 mb-4">
        <div className="mb-8">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="url">
            1. 공구 하고 싶은 상품 판매 페이지의 URL을 입력해주세요
          </label>
          <div className="relative flex items-center">
            <FaPaste 
              className="absolute left-3 text-gray-500 cursor-pointer"
              onClick={handlePasteClick}
            />
            <input
              id="url"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="shadow appearance-none border rounded w-full py-3 pl-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="URL 입력하기"
            />
          </div>
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="people">
            2. 공구 하고 싶은 인원을 입력해주세요
          </label>
          <input
            id="people"
            type="number"
            value={people}
            onChange={handlePeopleChange}
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="인원 입력하기(명)"
            min="1"
          />
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="promotion">
            3. 상품 홍보를 위한 문구를 작성해주세요
          </label>
          <textarea
            id="promotion"
            value={promotion}
            onChange={(e) => setPromotion(e.target.value)}
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="홍보 문구 입력하기"
          />
        </div>
        <div className="flex items-center justify-center mb-4">
          <button
            type="submit"
            className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
          >
            상품 등록 완료하기
          </button>
        </div>
        {toastMessage && (
          <div className="fixed bottom-60 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded">
            {toastMessage}
          </div>
        )}
      </form>
    </div>
  );
}

export default Upload;
