import axios from "axios";
import { type  RegisterDto } from "./types/RegisterDto";
import { type LoginDto } from "./types/LoginDto";

const baseApiUrl = import.meta.env.VITE_REST_API_BASE_URL + "/auth";

const generateBasicToken = (email: string, password: string) => "Basic " + window.btoa(`${email}:${password}`);
export const storeToken = (email: string, password: string) => localStorage.setItem("token", generateBasicToken(email, password));
export const getToken = (): string | null => localStorage.getItem("token");

axios.interceptors.request.use(function (config) {
  config.headers["Authorization"] = getToken();
  return config;
}, function (error){
  return Promise.reject(error);
})


export const registerUser = async (registerDto: RegisterDto): Promise<void> => {
  const endpoint = baseApiUrl + "/register";
  try{
  const response = await axios.post(endpoint, registerDto);
  return response.data;
  }catch(err: any){
    throw new Error(err.response ?? "failed!");
  }
};

export const login = async (loginDto: LoginDto): Promise<any /*ログインのレスポンスどうなるか見通せないのでいったんany*/> => {
  const endpoint = baseApiUrl + "/login";
  try{
  const response = await axios.post(endpoint, loginDto);
  return response.data;
  }catch(err: any){
    console.log(err);
    throw new Error(err.response ?? "failed!")
  }
}
