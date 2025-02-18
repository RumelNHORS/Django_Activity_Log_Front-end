import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../services/api";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>My App</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/add-product">Add Product</Link>
        <Link to="/activity-logs">Activity Logs</Link>
        <Link to="/register">Register</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
