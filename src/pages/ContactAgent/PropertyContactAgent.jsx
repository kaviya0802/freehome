import { useParams } from "react-router-dom";
import { useState } from "react";
import properties from "../../data/generateProperties";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function PropertyContactAgent() {
  const { id } = useParams();

  const property = properties.find(p => String(p.id) === String(id));

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    visitDate: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Request sent for ${property.title}\nAgent will contact you soon.`
    );

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
      visitDate: ""
    });
  };

  if (!property) return <h2>Property not found</h2>;

  return (
    <>
      <Navbar />

      <div className="contact-container">

        <h1>Contact Agent</h1>

        <h3>{property.title}</h3>
        <p>{property.location} | ${property.price.toLocaleString()}</p>

        <form onSubmit={handleSubmit}>

          <input name="name" placeholder="Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="phone" placeholder="Phone (+61)" onChange={handleChange} />

          <input type="date" name="visitDate" onChange={handleChange} />

          <textarea
            name="message"
            placeholder="Price negotiation / visit / offer details"
            onChange={handleChange}
          />

          <button type="submit">Send Request</button>

        </form>

      </div>

      <Footer />
    </>
  );
}

export default PropertyContactAgent;