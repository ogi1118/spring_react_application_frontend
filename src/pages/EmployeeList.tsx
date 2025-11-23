import { fetchAllEmployeesData } from "../service/EmployeeService";

import { useState, useEffect } from "react";
import type { EmployeeDto } from "../service/types/EmployeeDto";
import { useNavigate } from "react-router-dom";

function EmployeeList() {
  const [employeesData, setEmployeesData] = useState<EmployeeDto[]>([]);

  const navigator = useNavigate();

  useEffect(() => {
    fetchAllEmployeesData().then((data) => {
      setEmployeesData(data);
    });
  }, []);

  const createNewEmployee = () => {
    navigator("/create-employee");
  };

  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <button className="btn btn-primary mb-2" onClick={createNewEmployee}>
        Add Employee
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>id</th>
            <th>first name</th>
            <th>last name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {employeesData.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
