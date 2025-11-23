import { useState } from "react";
import { createEmployee } from "../service/EmployeeService";
import { type EmployeeDto } from "../service/types/EmployeeDto";
import { useNavigate } from "react-router-dom";

function CreateEmployeePage() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const navigate = useNavigate();

  const saveEmployee = () => {
    const newEmployee: EmployeeDto = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    createEmployee(newEmployee);

    navigate("/employees");
  };

  return (
    <>
      <div className="container">
        <br />
        <br />
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h2 className="text-center">Add Employee</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter Employee First Name"
                    name="firstName"
                    value={firstName}
                    className="form-control"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter Employee Last Name"
                    name="lastName"
                    value={lastName}
                    className="form-control"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Employee Email"
                    name="email"
                    value={email}
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={saveEmployee}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateEmployeePage;
