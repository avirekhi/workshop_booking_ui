import { useState } from "react";

export default function WorkshopStatics() {
  const [filter, setFilter] = useState("");
  const [showGraph, setShowGraph] = useState(false);

  const workshopData = [
    { name: "Data Science", domain: "Data Science", instructor: "A", date: "2026-05-01", duration: "2W" },
    { name: "AI", domain: "Artificial Intelligence", instructor: "B", date: "2026-05-10", duration: "4W" },
    { name: "Web", domain: "Web Tech", instructor: "C", date: "2026-05-15", duration: "3W" },
  ];

  const filtered = workshopData.filter((d) =>
    d.domain.toLowerCase().includes(filter.toLowerCase())
  );

  const domainCount = {};
  workshopData.forEach((d) => {
    domainCount[d.domain] = (domainCount[d.domain] || 0) + 1;
  });

  return (
    <div style={{ maxWidth: "1100px", margin: "auto" }}>
      <h2>Workshop Statics</h2>

      <input
        placeholder="Filter by domain..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{
          padding: "12px",
          marginTop: "20px",
          width: "100%",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <table
        style={{
          width: "100%",
          marginTop: "20px",
          borderCollapse: "collapse",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <thead>
          <tr style={{ background: "#2563eb", color: "white" }}>
            <th style={{ padding: "15px" }}>Workshop Name</th>
            <th style={{ padding: "15px" }}>Workshop Domain</th>
            <th style={{ padding: "15px" }}>Instructor Name</th>
            <th style={{ padding: "15px" }}>Start Date</th>
            <th style={{ padding: "15px" }}>Workshop Duration</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((w, i) => (
            <tr
              key={i}
              style={{ textAlign: "center", background: "white" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f1f5f9")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
            >
              <td style={{ padding: "15px" }}>{w.name}</td>
              <td style={{ padding: "15px" }}>{w.domain}</td>
              <td style={{ padding: "15px" }}>{w.instructor}</td>
              <td style={{ padding: "15px" }}>{w.date}</td>
              <td style={{ padding: "15px" }}>{w.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={() => setShowGraph(!showGraph)}
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          background: "#9333ea",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Show Insights
      </button>

      {showGraph && (
        <div style={{ marginTop: "20px" }}>
          {Object.keys(domainCount).map((d, i) => (
            <div key={i} style={{ marginBottom: "12px" }}>
              <div style={{ marginBottom: "5px" }}>{d}</div>
              <div
                style={{
                  height: "25px",
                  width: `${domainCount[d] * 120}px`,
                  background: "#9333ea",
                  borderRadius: "6px",
                }}
              ></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}