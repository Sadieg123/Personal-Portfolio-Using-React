import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Please fill out all fields.");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    setError("");
    alert("Message sent successfully!");
  };

  return (
    <div className="page" style={{
      background: "linear-gradient(135deg, #fdf2f8, #eef2ff)"
    }}>
      <div className="section">
        <h1>Contact</h1>

        <p style={{ marginBottom: "30px", color: "#475569" }}>
          Feel free to reach out for collaborations, design work, or opportunities.
        </p>

        {/* FORM SECTION */}
        <div className="card">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Name"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <br /><br />

            <input
              placeholder="Email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <br /><br />

            <textarea
              placeholder="Message"
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <br /><br />

            <button type="submit">Send Message</button>

            {error && (
              <p style={{ color: "#ef4444", marginTop: "10px" }}>
                {error}
              </p>
            )}
          </form>
        </div>

        {/* CONTACT DETAILS */}
        <h2 style={{ marginTop: "40px" }}>Connect With Me</h2>

        <div className="card">
          <p>Email: au7127@ucf.edu.com</p>
          <p>Location: Florida, USA</p>

          <div style={{ marginTop: "10px" }}>
            <a
              href="https://www.linkedin.com/in/aurora-gibson-904263292/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "10px" }}
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Sadieg123"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}