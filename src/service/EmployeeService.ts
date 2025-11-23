import axios from "axios";
import { type EmployeeDto } from "./types/EmployeeDto";

const baseApiUrl = import.meta.env.VITE_REST_API_BASE_URL;

// API側でCORS設定をすること
export const fetchAllEmployeesData = async (): Promise<EmployeeDto[]> => {
    const allEmployeesApiEndpoint = baseApiUrl + "employees";
    
    const response = await axios.get(allEmployeesApiEndpoint)
    return response.data;
}