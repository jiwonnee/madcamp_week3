import React, { createContext, useState } from 'react';
import gonggu1 from '../assets/gonggu1.jpeg';
import gonggu2 from '../assets/gonggu2.jpeg';
import gonggu3 from '../assets/gonggu3.jpeg';
import gonggu4 from '../assets/gonggu4.jpeg';
import gonggu5 from '../assets/gonggu5.jpeg';

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([
    { id: 1, name: '귤담원 제주 제철 감귤, 07.감귤 20kg, 1박스', price: '₩169,300', maxPeople: 5, currentPeople: 0, promotion: '달고 맛있는 제주산 감귤 공구해요^^~', image: gonggu1 },
    { id: 2, name: '더 도톰한 자연쓰임 무형광 라벤더 화장지 30m, 3팩', price: '₩34,890', maxPeople: 10, currentPeople: 0, promotion: '화장지 9개씩 나눌 분 구합니다', image: gonggu2 },
    { id: 3, name: 'KB farm 계란 명품인증 무항생제 달걀 왕란 30구, 2개', price: '₩21,000', maxPeople: 2, currentPeople: 0, promotion: '계란 1판씩 나눠용!', image: gonggu3 },
    { id: 4, name: '귀여운 캐릭터 식기 세트 밥그릇 도자기 그릇 전자렌지', price: '₩59,000', maxPeople: 4, currentPeople: 0, promotion: '전자레인지 돌릴 수 있는 좋은 그릇 같이 구매하실 분', image: gonggu4 },
    { id: 5, name: '[하리보 골드베렌컵 젤리, 175g, 18개', price: '₩45,780', maxPeople: 6, currentPeople: 0, promotion: '하리보 골드베렌 6명 모집중', image: gonggu5 },
  ]);

  const addItem = (item) => {
    setItems([...items, { ...item, id: items.length + 1, currentPeople: 0 }]);
  };

  return (
    <ItemsContext.Provider value={{ items, addItem }}>
      {children}
    </ItemsContext.Provider>
  );
};
