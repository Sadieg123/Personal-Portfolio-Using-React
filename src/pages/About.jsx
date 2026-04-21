export default function About() {
    return (
      <div className="page" style={{
        background: "linear-gradient(135deg, #f0f9ff, #fdf2f8)"
      }}>
        <div className="section">
          <h1>About Me</h1>
  
          <div className="card">
            <p>
              I’m a UX/UI designer focused on creating intuitive and accessible
              digital experiences. I enjoy solving problems through research,
              wireframing, and clean visual design.
            </p>
            <br></br>
            <p>I’m especially interested in how users interact with digital products
                and what makes an experience feel intuitive and enjoyable. I enjoy
                exploring UI design patterns, accessibility in design systems, and how
                visual hierarchy impacts user behavior.</p>
          </div>
  
          <h2 style={{ marginTop: "40px" }}>Skills</h2>
  
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {["Figma", "React", "HTML", "CSS", "User Research"].map(skill => (
              <div key={skill} className="card" style={{ padding: "10px 14px" }}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }