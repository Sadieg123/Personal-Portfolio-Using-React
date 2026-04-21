export default function Footer() {
    return (
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          background: "#111",
          color: "white"
        }}
      >
        <p>© 2026 Aurora Gibson</p>
  
        <a
          href="https://www.linkedin.com/in/aurora-gibson-904263292/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "10px", color: "white", textDecoration: "none" }}
        >
          LinkedIn
        </a>
  
        <a
          href="https://github.com/Sadieg123"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          GitHub
        </a>
      </footer>
    );
  }