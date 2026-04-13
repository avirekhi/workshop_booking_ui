import { useState } from "react";

function Accountmenu() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "#2563eb",
          border: "none",
          padding: "6px 10px",
          color: "white",
          borderRadius: "6px",
        }}
      >
        Account
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "35px",
            background: "white",
            color: "black",
            borderRadius: "8px",
            width: "130px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
          }}
        >
          <p style={{ margin: 0, padding: "10px" }}>View Profile</p>
          <p style={{ margin: 0, padding: "10px" }}>Logout</p>
        </div>
      )}
    </div>
  );
}

export default Accountmenu;