// import React, { useEffect } from 'react';
// import lottie from 'lottie-web';
// import animationData from '../assets/animation.json'; // 올바른 경로로 수정

// function Animation({ onComplete }) {
//   useEffect(() => {
//     const animation = lottie.loadAnimation({
//       container: document.querySelector('#animation'),
//       animationData: animationData,
//       renderer: 'svg',
//       loop: false,
//       autoplay: true,
//     });

//     animation.addEventListener('complete', onComplete);

//     return () => {
//       animation.removeEventListener('complete', onComplete);
//     };
//   }, [onComplete]);

//   return <div id="animation" className="h-screen w-full"></div>;
// }

// export default Animation;
