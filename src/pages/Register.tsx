import { useState } from "react";
import { FormInput } from "../components/FormInput";
import { registerUser } from "../service/AuthService";
import { type RegisterDto } from "../service/types/RegisterDto";

export const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      await registerUser({
        name: name,
        email: email,
        password: password,
      } as RegisterDto);
      setMessage("Registration successful");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error: unknown) {
      console.error(error);
      let serverMessage = "Registration failed";
      if (typeof error === "string") {
        serverMessage = error;
      } else if (typeof error === "object" && error !== null) {
        const errObj = error as {
          response?: { data?: { message?: string } };
          message?: string;
        };
        serverMessage =
          errObj.response?.data?.message ?? errObj.message ?? serverMessage;
      }
      setError(serverMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h2>User Registration Form</h2>
            </div>
            <div className="card-body">
              {message && <div className="alert alert-success">{message}</div>}
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <FormInput
                  label="Name"
                  name="name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <FormInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "Registering..." : "Register"}
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

export default Register;
