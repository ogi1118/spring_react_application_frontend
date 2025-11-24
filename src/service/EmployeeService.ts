import axios from "axios";
import { type EmployeeDto } from "./types/EmployeeDto";

const baseApiUrl = import.meta.env.VITE_REST_API_BASE_URL + "/emplyees";

// API側でCORS設定をすること
export const fetchAllEmployeesData = async (): Promise<EmployeeDto[]> => {
    const allEmployeesApiEndpoint = baseApiUrl;
    
    const response = await axios.get(allEmployeesApiEndpoint)
    return response.data;
}

export const createEmployee = async (employeeDto: EmployeeDto): Promise<void> => {
    const createEmployeeApiEndpoint = baseApiUrl;

    const response = await axios.post(createEmployeeApiEndpoint, employeeDto);
    return response.data;
}