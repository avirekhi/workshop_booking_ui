import { useState } from "react";

export default function ProposeWorkshop() {
  const [form, setForm] = useState({
    workshop: "",
    date: "",
    agree: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.workshop || !form.date || !form.agree) {
      alert("Please fill all the fields");
      return;
    }
    alert("Your request is submitted");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Request a Workshop</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          marginTop: "20px",
          padding: "20px",
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <select
          value={form.workshop}
          onChange={(e) =>
            setForm({ ...form, workshop: e.target.value })
          }
          style={{ padding: "12px", borderRadius: "8px" }}
        >
          <option value="">Select the Workshop</option>
          <option>Data Science</option>
          <option>Artificial Intelligence</option>
          <option>Web Development</option>
        </select>

        <input
          type="date"
          value={form.date}
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
          style={{ padding: "12px", borderRadius: "8px" }}
        />

        <label style={{ display: "flex", gap: "10px" }}>
          <input
            type="checkbox"
            checked={form.agree}
            onChange={(e) =>
              setForm({ ...form, agree: e.target.checked })
            }
          />
          I accept the terms and conditions
        </label>

        <button
          style={{
            padding: "12px",
            borderRadius: "8px",
            background: "#2563eb",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}