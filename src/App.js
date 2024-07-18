// import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import Header from './components/Header';
// import HomePage from './components/HomePage';
// import Mypage from './pages/Mypage';
// import Gonggu from './pages/Gonggu';
// import SignIn from './pages/SignIn';
// import Register from './pages/Register';
// import Upload from './pages/Upload';
// import './App.css';
// import { ItemsProvider } from './context/ItemsContext';

// function App() {
//   const location = useLocation();
//   const isHomePage = location.pathname === '/';

//   return (
//     <ItemsProvider>
//       <div className="App">
//         <Header isHomePage={isHomePage} />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/mypage" element={<Mypage />} />
//           <Route path="/gonggu" element={<Gonggu />} />
//           <Route path="/signin" element={<SignIn />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/upload" element={<Upload />} />
//         </Routes>
//       </div>
//     </ItemsProvider>
//   );
// }

// export default App;
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Mypage from './pages/Mypage';
import Gonggu from './pages/Gonggu';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Upload from './pages/Upload';
import './App.css';
import { ItemsProvider } from './context/ItemsContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <AuthProvider>
      <ItemsProvider>
        <div className="App">
          <Header isHomePage={isHomePage} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/gonggu" element={<Gonggu />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </div>
      </ItemsProvider>
    </AuthProvider>
  );
}

export default App;
