import { fetchAllEmployeesData } from "../service/EmployeeService";

import { useState, useEffect } from "react";
import type { EmployeeDto } from "../service/types/EmployeeDto";

function EmployeeList() {
  const [employeesData, setEmployeesData] = useState<EmployeeDto[]>([]);

  useEffect(() => {
    fetchAllEmployeesData().then((data) => {
      setEmployeesData(data);
    });
  }, []);

  console.log(employeesData);

  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
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
