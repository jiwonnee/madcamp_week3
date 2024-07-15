// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaSearch } from 'react-icons/fa';
// // Import images
// import gonggu1 from '../assets/gonggu1.jpeg';
// import gonggu2 from '../assets/gonggu2.jpeg';
// import gonggu3 from '../assets/gonggu3.jpeg';
// import gonggu4 from '../assets/gonggu4.jpeg';
// import gonggu5 from '../assets/gonggu5.jpeg';

// function Gonggu() {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [items, setItems] = useState([
//     { id: 1, name: '귤담원 제주 제철 감귤, 07.감귤 20kg, 1박스', price: '₩169,300', maxPeople: 5, currentPeople: 0, promotion: '달고 맛있는 제주산 감귤 공구해요^^~', image: gonggu1 },
//     { id: 2, name: '더 도톰한 자연쓰임 무형광 라벤더 화장지 30m, 3팩', price: '₩34,890', maxPeople: 10, currentPeople: 0, promotion: '화장지 9개씩 나눌 분 구합니다', image: gonggu2 },
//     { id: 3, name: 'KB farm 계란 명품인증 무항생제 달걀 왕란 30구, 2개', price: '₩21,000', maxPeople: 2, currentPeople: 0, promotion: '계란 1판씩 나눠용!', image: gonggu3 },
//     { id: 4, name: '귀여운 캐릭터 식기 세트 자취 캐릭터 밥그릇 도자기 그릇 전자렌지', price: '₩59,000', maxPeople: 4, currentPeople: 0, promotion: '전자레인지 돌릴 수 있는 좋은 그릇 같이 구매하실 분', image: gonggu4 },
//     { id: 5, name: '[하리보 골드베렌컵 젤리, 175g, 18개', price: '₩45,780', maxPeople: 6, currentPeople: 0, promotion: '하리보 골드베렌 6명 모집중', image: gonggu5 },
//   ]);
//   const [isHovered, setIsHovered] = useState(false);
//   const [toastMessage, setToastMessage] = useState('');

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredItems = items.filter(item =>
//     item.name.replace(/\s+/g, '').toLowerCase().includes(searchTerm.replace(/\s+/g, '').toLowerCase())
//   );

//   const handleJoin = (id) => {
//     setItems(items.map(item => {
//       if (item.id === id) {
//         if (item.currentPeople >= item.maxPeople) {
//           setToastMessage('모집 인원을 초과하였습니다');
//           setTimeout(() => setToastMessage(''), 3000);
//           return item;
//         }
//         return { ...item, currentPeople: item.currentPeople + 1 };
//       }
//       return item;
//     }));
//   };

//   return (
//     <div className="flex flex-col items-center p-10 bg-gray-100 min-h-screen">
//       {toastMessage && (
//         <div className="fixed top-28 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded shadow-lg z-50">
//           {toastMessage}
//         </div>
//       )}
//       <div className="w-full max-w-3xl mb-4">
//         <div className="flex items-center space-x-4 mb-4">
//           <div className="relative flex-1">
//             <input
//               type="text"
//               placeholder="원하는 상품을 검색하세요"
//               value={searchTerm}
//               onChange={handleSearch}
//               className="w-full p-2 pl-10 border border-gray-300 rounded"
//             />
//             <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
//           </div>
//           <button
//             className="bg-gray-300 p-2 w-12 h-12 rounded-lg flex items-center justify-center relative"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//             onClick={() => navigate('/upload')}
//           >
//             +
//             {isHovered && (
//               <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white border border-gray-300 rounded p-1 text-xs whitespace-nowrap">
//                 직접 올리기
//               </span>
//             )}
//           </button>
//         </div>
//         <div className="grid grid-cols-1 gap-4">
//           {filteredItems.map(item => (
//             <div key={item.id} className="flex justify-between p-4 bg-white shadow rounded-lg">
//               <div className="flex items-center space-x-8">
//                 <img src={item.image} alt={`상품 ${item.id}`} className="w-36 h-36 rounded-lg object-contain pl-8" />
//                 <div className="ml-8">
//                   <p className="text-lg font-bold">{item.name}</p>
//                   <p className="text-gray-700">{item.price}</p>
//                   <p className="text-gray-600">모집 인원: {item.maxPeople}</p>
//                   <p className="text-gray-600">현재 인원: {item.currentPeople}</p>
//                   <p className="text-sm text-gray-500">{item.promotion}</p>
//                 </div>
//               </div>
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-0.5 rounded mr-[16px]"
//                 onClick={() => handleJoin(item.id)}
//               >
//                 참여하기
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Gonggu;
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { ItemsContext } from '../context/ItemsContext';

function Gonggu() {
  const navigate = useNavigate();
  const { items, setItems } = useContext(ItemsContext);
  const [searchTerm, setSearchTerm] = useState('');
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
                <img src={item.image} alt={`상품 ${item.id}`} className="w-36 h-36 rounded-lg object-contain pl-8" />
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
