import axios from 'axios';

// Axios 인스턴스를 생성하여 기본 설정을 구성합니다.
const api = axios.create({
    baseURL: 'http://localhost:5000/api', // 백엔드 서버의 기본 URL
    headers: {
        'Content-Type': 'application/json', // JSON 형식의 데이터를 사용합니다.
    },
});


api.interceptors.request.use(
    (config) => {
        console.log("Sending request to:", config.url, "with data:", config.data); // 수정: 요청 로그 추가
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

api.interceptors.response.use(
    (response) => {
        console.log("Received response from:", response.config.url, "with data:", response.data); // 수정: 응답 로그 추가
        return response;
    },
    (error) => {
        console.log("Error response from:", error.config.url, "with data:", error.response?.data); // 수정: 오류 응답 로그 추가
        return Promise.reject(error);
    }
);

export default api;
