import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Mypage() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Flask 서버로부터 데이터 가져오기
    axios.get('http://localhost:5000/scrape')
      .then(response => {
        console.log("Data fetched: ", response.data);  // 디버깅 출력
        setProductName(response.data.product_name);
        setProductPrice(response.data.product_price);
        setImageUrl(response.data.image_url);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
        if (error.response) {
          console.error("Response data:", error.response.data);
        }
      });
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">MyPage</h1>
      <p className="mt-4">This is My page.</p>
      <div className="mt-8 p-6 border rounded-lg shadow-md bg-white">
        <h2 className="text-2xl font-semibold">Product Information</h2>
        <p className="mt-4"><strong>Name:</strong> {productName}</p>
        <p className="mt-4"><strong>Price:</strong> {productPrice}</p>
        {imageUrl && <img src={imageUrl} alt="Product" className="mt-4" />}
      </div>
    </div>
  );
}

export default Mypage;
