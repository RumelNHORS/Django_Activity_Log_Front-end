// import { useState } from "react";
// import { addProduct } from "../services/api";
// import { useNavigate } from "react-router-dom";

// function AddProduct() {
//   const [formData, setFormData] = useState({ name: "", description: "", price: "" });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await addProduct(formData);
//     navigate("/products");
//   };

//   return (
//     <div>
//       <h2>Add Product</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
//         <input type="text" placeholder="Description" onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
//         <input type="number" placeholder="Price" onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
//         <button type="submit">Add Product</button>
//       </form>
//     </div>
//   );
// }

// export default AddProduct;


import { useState } from "react";
import { addProduct } from "../services/api";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [formData, setFormData] = useState({ name: "", description: "", price: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct(formData);
    setSuccessMessage("Product successfully created!");
    setTimeout(() => {
      setSuccessMessage("");
      navigate("/products");
    }, 2000);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Add Product</h2>
      {successMessage && <div style={styles.successMessage}>{successMessage}</div>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add Product</button>
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
  successMessage: {
    marginBottom: "20px",
    color: "green",
    fontSize: "18px",
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

export default AddProduct;


