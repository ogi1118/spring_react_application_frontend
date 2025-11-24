import { useState } from "react";
import { createEmployee } from "../service/EmployeeService";
import { type EmployeeDto } from "../service/types/EmployeeDto";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import useFormValidation from "../hooks/useFormValidation";

function CreateEmployeePage() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  // useFormValidation フックを使ってエラー管理を共通化
  // 引数にはフィールド名 -> 表示ラベル のマップを渡すと、メッセージにラベルが使われます
  const { errors, validate } = useFormValidation({
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
  });

  const navigate = useNavigate();

  // saveEmployee: フォーム送信時に呼ばれる関数
  // - e.preventDefault() でページリロードを防ぐ
  // - validate() を使って必須チェックを行い、問題なければ API 呼び出しを行う
  const saveEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      validate({
        firstName,
        lastName,
        email,
      })
    ) {
      // バリデーション通過後の処理
      const newEmployee: EmployeeDto = {
        firstName: firstName,
        lastName: lastName,
        email: email,
      };
      // サービス層へ新規作成リクエスト
      createEmployee(newEmployee);
      // 成功後は一覧へ遷移
      navigate("/employees");
    }
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
                  <FormInput
                    label="First Name"
                    name="firstName"
                    value={firstName}
                    placeholder="Enter Employee First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                    error={errors.firstName}
                  />
                </div>
                <div className="form-group mb-2">
                  <FormInput
                    label="Last Name"
                    name="lastName"
                    value={lastName}
                    placeholder="Enter Employee Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    error={errors.lastName}
                  />
                </div>
                <div className="form-group mb-2">
                  <FormInput
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                    placeholder="Enter Employee Email"
                    onChange={(e) => setEmail(e.target.value)}
                    error={errors.email}
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
