import { useState } from "react";
import "./Hero.css";
import profile from "../assets/profile.jpg";

function Hero(props) {
  const [likes, setLikes] = useState(0);
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <h1>Hello, I'm {props.name} 👋</h1>

        <h2>{props.role}</h2>

        <p>{props.description}</p>

        <div className="hero-buttons">
          <button>View Projects</button>
          <button>Contact Me</button>
        </div>
      </div>

      <div className="like-section">

  <button
    onClick={() => setLikes(likes + 1)}
  >
    ❤️ Like
  </button>

  <p>
    Likes: {likes}
  </p>

</div>

      <div className="hero-image">
        <img src={profile} alt="Profile" />
      </div>
    </section>
  );
}

export default Hero;