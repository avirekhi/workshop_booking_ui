import { useLocation } from "react-router-dom";

function WorkshopStatus() {
  const query = new URLSearchParams(useLocation().search);
  const type = query.get("type");

  let title = "Workshops";

  if (type === "upcoming") title = "📅 Upcoming Workshops..";
  else if (type === "registered") title = "📝 Registered Workshops..";
  else if (type === "completed") title = "✅ Completed Workshops..";

  return (
    <div>
      <h2 style={{ marginBottom: "10px" }}>{title}</h2>

      <p style={{ color: "#64748b" }}>
        ..Manage and track your all workshop activities here..
      </p>

      <div style={{ marginTop: "30px" }}>
        <p style={{ color: "#94a3b8" }}>
          No workshop found for this category right now.
        </p>
      </div>
    </div>
  );
}

export default WorkshopStatus;