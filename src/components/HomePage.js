import React from 'react';
import main1 from '../assets/main1.jpeg';
import main2 from '../assets/main2.jpeg';
import main3 from '../assets/main3.jpeg';
import main4 from '../assets/main4.jpeg';

const items = [
  { src: main1, text: '원하는 물품을 검색하세요!' },
  { src: main2, text: '상품 탭을 눌러 상품 상세 정보와 참여 인원 확인하세요!' },
  { src: main3, text: '원하는 상품이 있으면 공동구매에 참여하세요!' },
  { src: main4, text: '원하는 상품이 없으면 직접 추가하세요!' }
];

function HomePage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 z-0" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0% 100%)' }}></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full pt-20 p-10">
        <p className="mt-24 mb-8 text-center text-2xl">자원도 아끼고, 돈도 아낄 수 있는 플랫폼</p>
        <h1 className="text-6xl font-bold text-center">
          <span className="text-red-500">가치</span> 있는 선택, <span className="text-purple-500">GaChi</span>
        </h1>
        <div className="mt-40 flex space-x-4">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white shadow-2xl rounded-lg h-60 w-96 flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
                <img src={item.src} alt={`main${index + 1}`} className="h-full w-full object-cover rounded-lg" />
              </div>
              <span className="mt-2 text-center">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
