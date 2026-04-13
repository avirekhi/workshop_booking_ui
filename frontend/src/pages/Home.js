import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const carddesign = {
    width: "260px",
    height: "170px",
    background: "linear-gradient(135deg, #ffffff, #e2e8f0)",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "600",
    padding: "10px",
  };

  const cardtitle = {
    fontSize: "18px",
    marginBottom: "10px",
  };

  const buttondesign = {
    marginTop: "8px",
    padding: "6px 14px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "0.2s",
  };

  return (
    <div>
      <h1 style={{ fontSize: "30px", marginBottom: "5px" }}>
        Welcome to the FOSSEE Workshop Portal...
      </h1>

      <p style={{ color: "#64748b", fontSize: "16px" }}>
        Explore, register and track all your workshops effortlessly
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          marginTop: "40px",
        }}
      >
        <div
          style={carddesign}
          onClick={() => navigate("/status?type=upcoming")}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.08)";
            e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
          }}
        >
          <div style={cardtitle}>📅 Upcoming Workshops</div>
          <button
            style={buttondesign}
            onMouseEnter={(e) => (e.target.style.background = "#1d4ed8")}
            onMouseLeave={(e) => (e.target.style.background = "#2563eb")}
          >
            View
          </button>
        </div>

        <div
          style={carddesign}
          onClick={() => navigate("/status?type=registered")}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.08)";
            e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
          }}
        >
          <div style={cardtitle}>📝 Registered Workshops</div>
          <button
            style={buttondesign}
            onMouseEnter={(e) => (e.target.style.background = "#1d4ed8")}
            onMouseLeave={(e) => (e.target.style.background = "#2563eb")}
          >
            View
          </button>
        </div>

        <div
          style={carddesign}
          onClick={() => navigate("/status?type=completed")}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.08)";
            e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
          }}
        >
          <div style={cardtitle}>✅ Completed Workshops</div>
          <button
            style={buttondesign}
            onMouseEnter={(e) => (e.target.style.background = "#1d4ed8")}
            onMouseLeave={(e) => (e.target.style.background = "#2563eb")}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;