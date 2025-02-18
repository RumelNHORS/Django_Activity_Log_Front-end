// import { useState } from "react";
// import { loginUser } from "../services/api";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [formData, setFormData] = useState({ username: "", password: "" });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await loginUser(formData);
//     navigate("/products");
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
//         <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;




import { useState } from "react";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(formData);
    navigate("/products");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f4f8",
  },
  title: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  input: {
    marginBottom: "15px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default Login;



