import Header from "./components/Header";
import EmployeeList from "./pages/EmployeeList";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployeePage from "./pages/CreateEmployee";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* Routesの外は常時表示 */}
        <Routes>
          {/* http://localhost:3000 */}
          <Route path="/" element={<EmployeeList />}></Route>
          {/* http://localhost:3000/Employees */}
          <Route path="/employees" element={<EmployeeList />}></Route>
          <Route
            path="/create-employee"
            element={<CreateEmployeePage />}
          ></Route>

          <Route path="/register" element={<Register />}></Route>

          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
