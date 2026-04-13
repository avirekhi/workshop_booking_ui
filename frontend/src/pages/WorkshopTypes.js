export default function WorkshopTypes() {
  const workshopData = [
    { id: 1, name: "Data Analytics", duration: "2 Weeks", skills: "Excel, Python" },
    { id: 2, name: "Machine Learning", duration: "4 Weeks", skills: "Python, Math" },
    { id: 3, name: "Full Stack", duration: "3 Weeks", skills: "HTML, CSS, JS" },
  ];

  return (
    <div style={{ maxWidth: "1000px", margin: "auto" }}>
      <h2 style={{ marginBottom: "20px" }}>Workshop Types</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <thead>
          <tr style={{ background: "#2563eb", color: "white" }}>
            <th style={{ padding: "15px" }}>S.No</th>
            <th style={{ padding: "15px" }}>Workshop Title</th>
            <th style={{ padding: "15px" }}>Workshop Duration</th>
            <th style={{ padding: "15px" }}>Skills Required</th>
          </tr>
        </thead>

        <tbody>
          {workshopData.map((w) => (
            <tr
              key={w.id}
              style={{ textAlign: "center", background: "white" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f1f5f9")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
            >
              <td style={{ padding: "15px" }}>{w.id}</td>
              <td style={{ padding: "15px" }}>{w.name}</td>
              <td style={{ padding: "15px" }}>{w.duration}</td>
              <td style={{ padding: "15px" }}>{w.skills}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}