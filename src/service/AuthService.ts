import axios from "axios";
import { type  RegisterDto } from "./types/RegisterDto";
import { type LoginDto } from "./types/LoginDto";

const baseApiUrl = import.meta.env.VITE_REST_API_BASE_URL + "/auth";

export const registerUser = async (registerDto: RegisterDto): Promise<void> => {
  const endpoint = baseApiUrl + "/register";
  const response = await axios.post(endpoint, registerDto);
  return response.data;
};

export const login = async (loginDto: LoginDto): Promise<any /*ログインのレスポンスどうなるか見通せないのでいったんany*/> => {
  const endpoint = baseApiUrl + "/login";
  const response = await axios.post(endpoint, loginDto);
  console.log(response);
  
  return response.data;
}
