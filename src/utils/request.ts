// import axios, { AxiosRequestConfig } from 'axios'
import axios from 'axios'
const request = axios.create({
	baseURL: import.meta.env.VITE_API_BASEURL
})

//请求拦截器
request.interceptors.request.use(function(config) {
	return config
},function (error) {
	return Promise.reject(error)
})

//响应拦截器
request.interceptors.response.use(function(response) {
  return response
},function (error) {
	return Promise.reject(error)
})

// export default<T = any>(config: AxiosRequestConfig) => {
// 	return request(config).then(res => {
// 		return res.data.data as T
// 	})
// }
export default request