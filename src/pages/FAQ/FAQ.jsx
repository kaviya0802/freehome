import { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    { q: "Is FreeHome free to use?", a: "Yes, it is completely free for users." },
    { q: "How do I contact an agent?", a: "Use Contact Agent button on property page." },
    { q: "Can I save properties?", a: "Yes, use the wishlist feature." },
    { q: "Do you provide loan help?", a: "Yes, we connect you with partners." }
  ];

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>

      {faqs.map((item, i) => (
        <div key={i} className="faq-item" onClick={() => setOpen(open === i ? null : i)}>
          <h4>{item.q}</h4>
          {open === i && <p>{item.a}</p>}
        </div>
      ))}
    </div>
  );
}

export default FAQ;