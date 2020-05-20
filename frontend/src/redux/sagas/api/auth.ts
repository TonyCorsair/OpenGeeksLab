import axios from "axios";
import { IForgot, ILogin, ISignUp } from "../../../types/auth";

export function signIn(data: ILogin) {
  return axios({
    url: "http://localhost:3001/user/login",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  });
}

export function signUp(data: ISignUp) {
  return axios({
    url: "http://localhost:3001/user/register",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  });
}

export function forgotPass(data: IForgot) {
  return axios({
    url: "http://localhost:3001/user/forgot",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  });
}
