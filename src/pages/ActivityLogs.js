import { useEffect, useState } from "react";
import { getActivityLogs } from "../services/api";

function ActivityLogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    getActivityLogs().then((response) => {
      setLogs(response.data);
  
      // Log the correct action user
      response.data.forEach((log) => {
        console.log(`User: ${log.user}, Action: ${log.action}, Product: ${log.product}, Time: ${log.timestamp}`);
      });
    });
  }, []);
  

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Activity Logs</h2>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.header}>Log ID</th>
              <th style={styles.header}> Action User</th>
              <th style={styles.header}>Product Name</th>
              <th style={styles.header}>Product Owner</th>
              <th style={styles.header}>Action</th>
              <th style={styles.header}>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id}>
                <td style={styles.cell}>{log.id}</td>
                <td style={styles.cell}>{log.user}</td>
                <td style={styles.cell}>{log.product}</td>
                <td style={styles.cell}>{log.product_owner}</td>
                <td style={styles.cell}>{log.action}</td>
                <td style={styles.cell}>{log.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Define styles
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
  tableContainer: {
    width: "80%",
    maxHeight: "70vh",
    overflowY: "auto",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    backgroundColor: "#fff",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
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

export default ActivityLogs;
