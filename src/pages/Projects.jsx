import project2 from "../assets/project2.png";
import project1 from "../assets/project1.png";
import project3 from "../assets/project3.png";

export default function Projects() {
    return (
      <div className="page" style={{
        background: "linear-gradient(135deg, #fff7ed, #eef2ff)"
      }}>
        <div className="section">
          <h1>Projects</h1>
  
          <div className="card">
            <h3>Todo App</h3>
            <p>
              A social media app designed to keep track of your tasks. Add and check off tasks with an ease of a click.
            </p>
            <br></br>
            <img src={project1} alt="Project 1" style={{ width: "40%", borderRadius: "12px", marginBottom: "10px" }} />
            <br></br>
            <a
                href="https://sadieg123.github.io/expo-todo-app/"
                target="_blank"
                rel="noopener noreferrer"
            >
                View Live Project
            </a>
          </div>
  
          <div className="card" style={{ marginTop: "20px" }}>
            <h3>Travel Bucket List</h3>
            <p>
              A website where you can track your must see destinations around the world. Create an account to save 
              all your bucket list items and categorize them based off of priority, status of how highly you want to 
              visit, and by continent. You can even add an image to each item to help visualize your next trip.
            </p>
            <br></br>
            <img src={project2} alt="Project 2" style={{ width: "40%", borderRadius: "12px", marginBottom: "10px" }} />
            <br></br>
            <a
                href="https://sadieg123.github.io/travel-bucket-list/"
                target="_blank"
                rel="noopener noreferrer"
            >
                View Live Project
            </a>
          </div>
  
          <div className="card" style={{ marginTop: "20px" }}>
            <h3>Exercise App</h3>
            <p>
              A mobile app where you can keep track of your exercises. Click on any exercise and count your reps, sets, and timing.
            </p>
            <br></br>
            <img src={project3} alt="Project 3" style={{ width: "40%", borderRadius: "12px", marginBottom: "10px" }} />
            <br></br>
            <a
                href="https://sadieg123.github.io/updated-exercise-app/"
                target="_blank"
                rel="noopener noreferrer"
            >
                View Live Project
            </a>
          </div>
        </div>
      </div>
    );
  }