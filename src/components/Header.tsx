import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div>
            <a className="navbar-brand" href="http://localhost:3000">
              Employee Management System
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
