//api 만들기
import axios from "axios";

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers:{
        "Content-Type": "application/json"
    }
})

//d없어도 되는데 axios 이런 기능도 있다라는걸 알기 위해 일부러 사용
// Add a request interceptor
api.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("request start", config)
    return config;
  }, function (error) {
    console.log("request error", error)
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
api.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("get response", response)
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("response error", error)
    return Promise.reject(error);
  });

export default api;