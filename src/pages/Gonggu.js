import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import icon from '../assets/icon.png';

function Gonggu() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([
    { id: 1, name: '상품 1', price: '₩10,000', maxPeople: 4, currentPeople: 0, promotion: '상품1 홍보 문구 부분' },
    { id: 2, name: '상품 2', price: '₩20,000', maxPeople: 4, currentPeople: 0, promotion: '상품2 홍보 문구 부분' },
    { id: 3, name: '상품 3', price: '₩30,000', maxPeople: 4, currentPeople: 0, promotion: '상품3 홍보 문구 부분' },
    { id: 4, name: '상품 4', price: '₩40,000', maxPeople: 4, currentPeople: 0, promotion: '상품4 홍보 문구 부분' },
    { id: 5, name: '상품 5', price: '₩50,000', maxPeople: 4, currentPeople: 0, promotion: '상품5 홍보 문구 부분' },
    { id: 6, name: '상품 6', price: '₩60,000', maxPeople: 4, currentPeople: 0, promotion: '상품6 홍보 문구 부분' },
  ]);
  const [isHovered, setIsHovered] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter(item =>
    item.name.replace(/\s+/g, '').toLowerCase().includes(searchTerm.replace(/\s+/g, '').toLowerCase())
  );

  const handleJoin = (id) => {
    setItems(items.map(item => {
      if (item.id === id) {
        if (item.currentPeople >= item.maxPeople) {
          setToastMessage('모집 인원을 초과하였습니다');
          setTimeout(() => setToastMessage(''), 3000);
          return item;
        }
        return { ...item, currentPeople: item.currentPeople + 1 };
      }
      return item;
    }));
  };

  return (
    <div className="flex flex-col items-center p-10 bg-gray-100 min-h-screen">
      {toastMessage && (
        <div className="fixed top-28 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded shadow-lg z-50">
          {toastMessage}
        </div>
      )}
      <div className="w-full max-w-3xl mb-4">
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="원하는 상품을 검색하세요"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-2 pl-10 border border-gray-300 rounded"
            />
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          </div>
          <button
            className="bg-gray-300 p-2 w-12 h-12 rounded-lg flex items-center justify-center relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => navigate('/upload')}
          >
            +
            {isHovered && (
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white border border-gray-300 rounded p-1 text-xs whitespace-nowrap">
                직접 올리기
              </span>
            )}
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {filteredItems.map(item => (
            <div key={item.id} className="flex justify-between p-4 bg-white shadow rounded-lg">
              <div className="flex items-center space-x-8">
                <img src={icon} alt="상품 사진" className="w-36 h-36 rounded-lg object-contain pl-8" />
                <div className="ml-8">
                  <p className="text-lg font-bold">{item.name}</p>
                  <p className="text-gray-700">{item.price}</p>
                  <p className="text-gray-600">모집 인원: {item.maxPeople}</p>
                  <p className="text-gray-600">현재 인원: {item.currentPeople}</p>
                  <p className="text-sm text-gray-500">{item.promotion}</p>
                </div>
              </div>
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-0.5 rounded mr-[16px]"
                onClick={() => handleJoin(item.id)}
              >
                참여하기
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gonggu;
