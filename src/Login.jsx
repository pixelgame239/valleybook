import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with", email, password);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh",width: "100vh", backgroundColor: "#3b82f6" }}>
      <div style={{ width: "350px", padding: "20px", backgroundColor: "#ffffff", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ textAlign: "center", color: "#1e40af", marginBottom: "16px" }}>Login</h2>
        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="email" style={{ color: "#1e40af", fontWeight: "bold" }}>Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "4px", border: "1px solid #93c5fd", borderRadius: "6px" }}
          />
        </div>
        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="password" style={{ color: "#1e40af", fontWeight: "bold" }}>Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "4px", border: "1px solid #93c5fd", borderRadius: "6px" }}
          />
        </div>
        <button 
          onClick={handleLogin} 
          style={{ width: "100%", padding: "10px", backgroundColor: "#1e40af", color: "#ffffff", border: "none", borderRadius: "6px", cursor: "pointer" }}>
          Login
        </button>
      </div>
    </div>
  );
}
