
// import { useEffect, useState } from "react";
// import { getProducts } from "../services/api";

// function ProductList() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getProducts().then((response) => setProducts(response.data));
//   }, []);

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Product List</h2>
//       <table style={styles.table}>
//         <thead>
//           <tr>
//             <th style={styles.header}>ID</th>
//             <th style={styles.header}>Name</th>
//             <th style={styles.header}>Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td style={styles.cell}>{product.id}</td>
//               <td style={styles.cell}>{product.name}</td>
//               <td style={styles.cell}>${product.price}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "100vh",
//     backgroundColor: "#f0f4f8",
//   },
//   title: {
//     marginBottom: "20px",
//     fontSize: "24px",
//     color: "#333",
//   },
//   table: {
//     width: "80%",
//     borderCollapse: "collapse",
//     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//   },
//   header: {
//     backgroundColor: "#007BFF",
//     color: "#fff",
//     padding: "10px",
//     textAlign: "left",
//     borderBottom: "2px solid #ddd",
//   },
//   cell: {
//     padding: "10px",
//     borderBottom: "1px solid #ddd",
//   },
// };

// export default ProductList;



import { useEffect, useState } from "react";
import { getProducts, updateProduct, deleteProduct } from "../services/api";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null); // Track product being edited
  const [updatedName, setUpdatedName] = useState("");
  const [updatedPrice, setUpdatedPrice] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await getProducts();
    setProducts(response.data);
  };

  const handleUpdate = async (id) => {
    await updateProduct(id, { name: updatedName, price: updatedPrice });
    setEditProduct(null); // Exit edit mode
    fetchProducts(); // Refresh product list
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts(); // Refresh product list
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Product List</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.header}>ID</th>
            <th style={styles.header}>Name</th>
            <th style={styles.header}>Price</th>
            <th style={styles.header}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td style={styles.cell}>{product.id}</td>

              {/* Editing Mode */}
              {editProduct === product.id ? (
                <>
                  <td style={styles.cell}>
                    <input
                      type="text"
                      value={updatedName}
                      onChange={(e) => setUpdatedName(e.target.value)}
                    />
                  </td>
                  <td style={styles.cell}>
                    <input
                      type="number"
                      value={updatedPrice}
                      onChange={(e) => setUpdatedPrice(e.target.value)}
                    />
                  </td>
                  <td style={styles.cell}>
                    <button style={styles.saveBtn} onClick={() => handleUpdate(product.id)}>
                      Save
                    </button>
                    <button style={styles.cancelBtn} onClick={() => setEditProduct(null)}>
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  {/* Display Mode */}
                  <td style={styles.cell}>{product.name}</td>
                  <td style={styles.cell}>${product.price}</td>
                  <td style={styles.cell}>
                    <button
                      style={styles.editBtn}
                      onClick={() => {
                        setEditProduct(product.id);
                        setUpdatedName(product.name);
                        setUpdatedPrice(product.price);
                      }}
                    >
                      Edit
                    </button>
                    <button style={styles.deleteBtn} onClick={() => handleDelete(product.id)}>
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
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
  table: {
    width: "80%",
    borderCollapse: "collapse",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  header: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px",
    textAlign: "left",
    borderBottom: "2px solid #ddd",
  },
  cell: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  editBtn: {
    backgroundColor: "#ffc107",
    color: "#000",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    marginRight: "5px",
  },
  deleteBtn: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
  saveBtn: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    marginRight: "5px",
  },
  cancelBtn: {
    backgroundColor: "#6c757d",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default ProductList;


