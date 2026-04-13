import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 24px",
        background: "#1e293b",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <img src={logo} alt="logo" style={{ width: "48px", height: "36px", borderRadius: "6px" }} />
        <span style={{ fontWeight: "bold", fontSize: "18px" }}>Workshop Portal</span>
      </div>

      <nav style={{ display: "flex", gap: "18px" }}>
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({
            color: isActive ? "white" : "#cbd5e1",
            textDecoration: "none",
            borderBottom: isActive ? "2px solid #3b82f6" : "none",
            paddingBottom: "4px"
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/status"
          style={({ isActive }) => ({
            color: isActive ? "white" : "#cbd5e1",
            textDecoration: "none",
            borderBottom: isActive ? "2px solid #3b82f6" : "none",
            paddingBottom: "4px"
          })}
        >
          Status
        </NavLink>

        <NavLink
          to="/statics"
          style={({ isActive }) => ({
            color: isActive ? "white" : "#cbd5e1",
            textDecoration: "none",
            borderBottom: isActive ? "2px solid #3b82f6" : "none",
            paddingBottom: "4px"
          })}
        >
          Statics
        </NavLink>

        <NavLink
          to="/types"
          style={({ isActive }) => ({
            color: isActive ? "white" : "#cbd5e1",
            textDecoration: "none",
            borderBottom: isActive ? "2px solid #3b82f6" : "none",
            paddingBottom: "4px"
          })}
        >
          Types
        </NavLink>

        <NavLink
          to="/propose"
          style={({ isActive }) => ({
            color: isActive ? "white" : "#cbd5e1",
            textDecoration: "none",
            borderBottom: isActive ? "2px solid #3b82f6" : "none",
            paddingBottom: "4px"
          })}
        >
          Propose
        </NavLink>
      </nav>

      <div style={{ position: "relative" }}>
        <button
          onClick={() => setOpen(!open)}
          onMouseEnter={(e) => (e.target.style.background = "#1d4ed8")}
          onMouseLeave={(e) => (e.target.style.background = "#2563eb")}
          style={{
            background: "#2563eb",
            border: "none",
            padding: "8px 16px",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "500",
            transition: "all 0.2s"
          }}
        >
          👤 Account ▾
        </button>

        {open && (
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "40px",
              background: "white",
              color: "black",
              borderRadius: "10px",
              width: "160px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              overflow: "hidden",
            }}
          >
            <div
              onClick={() => {
                alert("Profile Page");
                setOpen(false);
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f1f5f9")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
              style={{ padding: "12px", cursor: "pointer" }}
            >
              👤 My Profile
            </div>

            <div
              onClick={() => {
                alert("Logged Out");
                setOpen(false);
                navigate("/");
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#fee2e2")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
              style={{
                padding: "12px",
                cursor: "pointer",
                color: "#dc2626",
                fontWeight: "500",
              }}
            >
              ⭕ Log Out
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;