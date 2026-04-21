import bg from "../assets/background.jpeg";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div
        className="home-hero"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-content">
          <div className="pill">
            UX/UI Designer • Digital Media Student
          </div>
  
          <h1>
            Designing experiences that feel clear, helpful, and enjoyable
          </h1>
  
          <p>
            I focus on building clean, human-centered digital products that
            make interactions simple and intuitive.
          </p>
  
          <div className="hero-buttons">
  <button onClick={() => navigate("/projects")}>
    View Projects
  </button>

  <button
    className="secondary"
    onClick={() => navigate("/contact")}
  >
    Contact
  </button>
</div>
        </div>
      </div>
    );
  }