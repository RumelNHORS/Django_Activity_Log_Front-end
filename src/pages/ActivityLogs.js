// import { useEffect, useState } from "react";
// import { getActivityLogs } from "../services/api";

// function ActivityLogs() {
//   const [logs, setLogs] = useState([]);

//   useEffect(() => {
//     getActivityLogs().then((response) => setLogs(response.data));
//   }, []);

//   return (
//     <div>
//       <h2>Activity Logs</h2>
//       <ul>
//         {logs.map((log) => (
//           <li key={log.id}>{log.user} - {log.action} - {log.timestamp}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ActivityLogs;




import { useEffect, useState } from "react";
import { getActivityLogs } from "../services/api";

function ActivityLogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    getActivityLogs().then((response) => setLogs(response.data));
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Activity Logs</h2>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.header}>User</th>
              <th style={styles.header}>Action</th>
              <th style={styles.header}>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id}>
                <td style={styles.cell}>{log.user}</td>
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



