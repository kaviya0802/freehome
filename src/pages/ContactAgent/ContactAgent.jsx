import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function ContactAgent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Agent will contact you soon!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />

      <div className="contact-container">

        <h1>Contact Agent</h1>

        <p>
          Ask about available properties, buying, renting, budget guidance.
        </p>

        <form onSubmit={handleSubmit}>

          <input name="name" placeholder="Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />

          <textarea
            name="message"
            placeholder="Tell us what you are looking for..."
            onChange={handleChange}
          />

          <button type="submit">Send</button>
        </form>

      </div>

      <Footer />
    </>
  );
}

export default ContactAgent;