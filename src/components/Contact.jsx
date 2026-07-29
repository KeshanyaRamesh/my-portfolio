import { useState } from "react";
import "./Contact.css";

function Contact() {

  const [name, setName] = useState("");

  return (

    <section
      id="contact"
      className="contact"
    >

      <h2>Contact Me</h2>

      <input

        type="text"

        placeholder="Enter your name"

        value={name}

        onChange={(e)=>setName(e.target.value)}

      />

      <p>Hello {name}</p>

    </section>

  );

}

export default Contact;