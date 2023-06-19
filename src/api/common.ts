/**
 * 公共基础接口封装
 */
import request from "@/utils/request"
import { ILoginInfo, ILoginResponse } from "./types/common"

export const getLoginInfo = () => {
	 return request<ILoginInfo>({
		method: 'GET',
		url: '/login/info'
	 })
}

export const login = (data: {
  account: string
  pwd: string
  imgcode: string
}) => {
  return request<ILoginResponse>({
    method: 'POST',
    url: '/login',
    data
  })
}

export const logout = () => {
  return request({
    method: 'GET',
    url: '/logout'
  })
}