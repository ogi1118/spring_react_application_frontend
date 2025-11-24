import React, { useState } from "react";
import { FormInput } from "../components/FormInput";
import useFormValidation from "../hooks/useFormValidation";
import { useNavigate } from "react-router-dom";
import type { LoginDto } from "../service/types/LoginDto";
import { login } from "../service/AuthService";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const { errors, validate } = useFormValidation({
    email: "Email",
    password: "Password",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate({ email, password })) return;

    const loginDto: LoginDto = {
      email: email,
      password: password,
    };

    await login(loginDto);
    navigate("/");
  };

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h2>User Login</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  error={errors.email}
                />

                <FormInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  error={errors.password}
                />

                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
