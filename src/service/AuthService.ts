import axios from "axios";
import type { RegisterDto } from "./types/RegisterDto";

const baseApiUrl = import.meta.env.VITE_REST_API_BASE_URL;

export const registerUser = async (registerDto: RegisterDto): Promise<void> => {
  const endpoint = baseApiUrl + "auth/register";
  const response = await axios.post(endpoint, registerDto);
  return response.data;
};

export default { registerUser };
