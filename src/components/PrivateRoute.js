import { Outlet, Navigate } from "react-router-dom";
import Navbar from "./Navbar";

function PrivateRoute() {
  const isAuthenticated = localStorage.getItem("access_token") !== null;

  return isAuthenticated ? (
    <div>
      <Navbar />  {/* Navbar appears on all protected pages */}
      <Outlet />   {/* Loads the specific page content here */}
    </div>
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoute;
