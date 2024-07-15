import React from 'react';
import wish1 from '../assets/wish1.jpeg';
import wish2 from '../assets/wish2.jpeg';
import wish3 from '../assets/wish3.jpeg';
import wish4 from '../assets/wish4.jpeg';
import wish5 from '../assets/wish5.webp';
import wish6 from '../assets/wish6.avif';
import icon from '../assets/icon.png';  // 추가

function Wishlist() {
  // DB에서 사용자 이름과 위시리스트 데이터를 가져오는 로직
  // const userName = "사용자 이름";
  // const wishlistItems = [ ... ];

  const userName = "사용자 이름";  // 임시 데이터
  const wishlistItems = [
    { id: 1, name: '오 드 퍼퓸 플레르 드 뽀 75ml', image: wish1, price: '265,050원' },
    { id: 2, name: '오 드 퍼퓸 오르페옹 75ml', image: wish2, price: '265,050원' },
    { id: 3, name: '블랑쉬 오 드 퍼퓸 50ml', image: wish3, price: '266,000원' },
    { id: 4, name: '모하비 고스트 오 드 퍼퓸 50ml', image: wish4, price: '266,000원' },
    { id: 5, name: '미스 디올 35ml', image: wish5, price: '133,000원' },
    { id: 6, name: '골저스 가드니아, 50ML, 오 드 퍼퓸', image: wish6, price: '191,000원' },
  ];

  const friends = [
    { id: 1, name: '친구 1', photo: icon },
    { id: 2, name: '친구 2', photo: icon },
    { id: 3, name: '친구 3', photo: icon },
    { id: 4, name: '친구 4', photo: icon },
    { id: 5, name: '친구 5', photo: icon },
  ];

  const friendWishlist = [
    { id: 1, items: Array(8).fill(icon) },
    { id: 2, items: Array(2).fill(icon) },
    { id: 3, items: Array(6).fill(icon) },
    { id: 4, items: Array(4).fill(icon) },
    { id: 5, items: Array(5).fill(icon) },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold mt-12 mb-8">{userName} 님이 올리신 위시리스트</h1>
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {wishlistItems.map(item => (
            <div key={item.id} className="flex-shrink-0 w-40 h-60 bg-white rounded-lg shadow-lg p-4">
              <img src={item.image} alt={item.name} className="w-full h-32 object-contain mb-4 rounded-lg" />
              <p className="text-center text-gray-700 font-semibold">{item.name}</p>
              <p className="text-center text-gray-700 font-semibold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t-4 mt-8 mb-16 pt-8 w-full max-w-4xl">
        <div className="overflow-y-auto h-80 pt-4">
          {friends.map((friend, index) => (
            <div key={friend.id} className="flex items-center mb-8">
              <img src={friend.photo} alt={friend.name} className="w-16 h-16 rounded-full" />
              <p className="text-gray-700 font-semibold ml-4">{friend.name}</p>
              <div className="flex overflow-x-auto space-x-4 ml-8">
                {friendWishlist[index].items.map((item, idx) => (
                  <img key={idx} src={item} alt={`친구${index + 1}의 선물 ${idx + 1}`} className="w-20 h-20 object-contain" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
