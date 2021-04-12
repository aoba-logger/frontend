import store from "store2"
import request from "../../utils/request"

export interface AuthParams {
  password: string
}

export interface AuthResp {
  token: string
}

export const auth = async (data: AuthParams) => {
  const resp = (await request.post<AuthResp>('auth', data)).data
  store.set('token', resp.token)
}