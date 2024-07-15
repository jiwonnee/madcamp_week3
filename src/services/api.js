import axios from 'axios';

// Axios 인스턴스를 생성하여 기본 설정을 구성합니다.
const api = axios.create({
    baseURL: 'http://localhost:5000/api', // 백엔드 서버의 기본 URL
    headers: {
        'Content-Type': 'application/json', // JSON 형식의 데이터를 사용합니다.
    },
});

// 요청을 보내기 전에 로컬 스토리지에서 토큰을 가져와 헤더에 추가합니다.
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // 저장된 토큰을 가져옵니다.
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // 헤더에 토큰을 추가합니다.
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
