// src/components/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();   // ✅ use this hook

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/login?loginId=${loginId}&password=${password}`,
        {
          method: "POST",
        }
      );
      const result = await response.text();
      if (result === "success") {
              navigate("/dashboard");
            } else {
              setMessage("Invalid login credentials");
            }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Login ID</label>
            <input
              type="text"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              style={styles.input}
              placeholder="Enter your Login ID"
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px 30px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
  },
  title: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    marginBottom: "8px",
    display: "block",
    color: "#555",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "16px",
    transition: "border 0.3s",
  },
  button: {
    padding: "12px",
    backgroundColor: "#2575fc",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  message: {
    marginTop: "15px",
    textAlign: "center",
    color: "red",
    fontWeight: "500",
  },
};

// Optional: hover and focus styles using inline JS (can also be done via CSS file)
styles.input[':focus'] = {
  border: "1px solid #2575fc",
};
styles.button[':hover'] = {
  backgroundColor: "#1a5edb",
};

export default LoginPage;
