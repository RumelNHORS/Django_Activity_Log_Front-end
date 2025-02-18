import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import ActivityLogs from "./pages/ActivityLogs";
import Login from "./pages/Login";
import Register from "./pages/Register";  // Ensure Register is imported

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />  {/* Register route */}

        {/* Protected Routes */}
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="activity-logs" element={<ActivityLogs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
