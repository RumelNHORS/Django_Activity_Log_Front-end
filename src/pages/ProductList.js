// import { useEffect, useState } from "react";
// import { getProducts } from "../services/api";

// function ProductList() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getProducts().then((response) => setProducts(response.data));
//   }, []);

//   return (
//     <div>
//       <h2>Product List</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>{product.name} - ${product.price}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ProductList;




import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => setProducts(response.data));
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Product List</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.header}>ID</th>
            <th style={styles.header}>Name</th>
            <th style={styles.header}>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td style={styles.cell}>{product.id}</td>
              <td style={styles.cell}>{product.name}</td>
              <td style={styles.cell}>${product.price}</td>
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
};

export default ProductList;


