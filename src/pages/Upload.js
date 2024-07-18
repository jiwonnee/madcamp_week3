import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPaste } from 'react-icons/fa';
import { ItemsContext } from '../context/ItemsContext';
import api from '../services/api';
import axios from 'axios';
import '../index.css';

function Upload() {
  const navigate = useNavigate();
  const { addItem } = useContext(ItemsContext);
  const [url, setUrl] = useState('');
  const [people, setPeople] = useState(1);
  const [promotion, setPromotion] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [crawledData, setCrawledData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!url || !people || !promotion || !crawledData) {
      setToastMessage('모두 입력해주세요');
      setTimeout(() => setToastMessage(''), 3000);
      return;
    }

    const userId = localStorage.getItem('userId'); // 수정: 로컬 스토리지에서 userId 가져오기

    try {
      const response = await api.post('/group-purchases/create-group-purchase', { // 수정됨: API 엔드포인트로 데이터 전송
        // const response = await api.post('/group-purchases/create-group-purchase', { // 수정됨: API 엔드포인트로 데이터 전송
        userId: userId, // 수정됨: 로그인된 사용자의 ID를 사용
        // uid: crawledData.product_uid, // 수정됨: productId 대신 uid 사용
        targetCount: people,
        productName: crawledData.product_name,
        productPrice: crawledData.product_price,
        productImageUrl: crawledData.image_url,
        promotionText: promotion
      });
      console.log('upload response:', response.data);

      addItem({ ...crawledData, maxPeople: people, promotion });
      navigate('/gonggu'); // 등록 후 Gonggu 페이지로 이동
    } catch (error) {
      console.error("There was an error posting the data!", error); // 수정됨: 오류 로그 추가
      setToastMessage('상품 등록에 실패했습니다.');
      setTimeout(() => setToastMessage(''), 3000);
    }
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (!url || !people || !promotion || !crawledData) {
  //     setToastMessage('모두 입력해주세요');
  //     setTimeout(() => setToastMessage(''), 3000);
  //     return;
  //   }
  //   addItem({ ...crawledData, maxPeople: people, promotion });
  //   navigate('/gonggu'); // 등록 후 Gonggu 페이지로 이동
  // };

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

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleCrawl = async () => {
    try {
      const response = await axios.post('http://localhost:5000/scrape', { url });
      setCrawledData(response.data);
    } catch (error) {
      console.error("There was an error fetching the data!", error);
      setToastMessage('유효하지 않은 URL입니다.');
      setTimeout(() => setToastMessage(''), 3000);
    }
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
              onChange={handleUrlChange}
              className="shadow appearance-none border rounded w-full py-3 pl-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="URL 입력하기"
            />
            <button
              type="button"
              onClick={handleCrawl}
              className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded flex items-center justify-center"
              style={{ width: '50px', height: '45px' }}
            >
              확인
            </button>
          </div>
        </div>

        {crawledData && (
          <div className="mb-8 p-4 bg-white shadow rounded-lg">
            <h2 className="text-gray-700 text-lg font-bold mb-2">상품 정보</h2>
            <div className="flex items-center space-x-4">
              <img src={crawledData.image_url} alt="상품 이미지" className="w-36 h-36 object-contain rounded" />
              <div>
                <p className="text-lg font-bold">{crawledData.product_name}</p>
                <p className="text-gray-700 mt-2">{crawledData.product_price}</p>
              </div>
            </div>
          </div>
        )}

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
