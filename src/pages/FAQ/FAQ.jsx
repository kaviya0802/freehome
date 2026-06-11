import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./FAQ.css";

function FAQ() {
  const [open, setOpen] = useState(null);

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const role = user?.role || "buyer";

  const faqData = {
    buyer: [
      ["How do I search properties?", "Use filters such as location, type, budget, and status."],
      ["Are listings verified?", "Yes, all listings go through a verification process."],
      ["Can I contact agents directly?", "Yes, every property includes a Contact Agent option."],
      ["Is FreeHome free to use?", "Yes, searching and browsing is completely free."],
      ["Can I save properties?", "Yes, add properties to your wishlist."],
      ["How do I compare properties?", "Use the Compare feature to evaluate multiple listings."],
      ["Can I rent properties?", "Yes, rental and purchase properties are available."],
      ["What property types are available?", "Apartment, Villa, Townhouse, Commercial, Luxury, Land and PG Hostel."],
       // ⭐ NEW BUYER QUESTIONS
    ["How do I know if a property is available?", "Each listing shows real-time availability status."],
    ["Can I filter properties by price range?", "Yes, you can set minimum and maximum budget filters."],
    ["Do I need an account to view details?", "Basic browsing is allowed without login, but saving requires account."],
    ["Can I contact multiple agents?", "Yes, you can contact agents from different listings."],
    ["How do I remove a saved property?", "Go to Wishlist and click remove option."],
    ["Are property images real?", "Yes, all images are uploaded by verified agents."],
    ["Can I search by city or state?", "Yes, location-based filtering is available."],
    ["How often are new listings added?", "New properties are added regularly by agents."],
    ["Can I see property size and details?", "Yes, each listing includes full specifications."],
    ["Is FreeHome safe to use?", "Yes, all data is secured and verified."],
    ],

    agent: [
      ["How do I add a property?", "Go to Add Property section and submit details."],
      ["Where can I see my listings?", "Go to My Listings in your agent dashboard."],
      ["How do I manage requests?", "Open Requests section to view buyer inquiries."],
      ["What are leads?", "Leads are potential buyers interested in your properties."],
      ["How do I edit a listing?", "Open a listing from My Listings and update details."],
      ["Can I delete a property?", "Yes, you can manage listings from dashboard options."],
      ["How do I contact buyers?", "Use the Leads section to follow up with buyers."],
      ["Is there analytics for my listings?", "Yes, Analytics shows views and engagement."],
      // ⭐ NEW AGENT QUESTIONS
    ["How do I get more leads?", "Keep listings updated and add clear images and descriptions."],
    ["Can I track property views?", "Yes, analytics shows how many users viewed your listings."],
    ["How do I respond to requests?", "Go to Requests section and reply to buyer messages."],
    ["Can I update property details later?", "Yes, you can edit listings anytime."],
    ["What happens after I get a lead?", "You can contact the buyer directly from Leads section."],
    ["Can I remove old listings?", "Yes, you can delete or deactivate listings."],
    ["How do I improve listing visibility?", "Use good images, correct pricing, and detailed descriptions."],
    ["Do I get notifications for new requests?", "Yes, new requests appear in your dashboard."],
    ["Can I manage multiple properties?", "Yes, agents can manage multiple listings easily."],
    ["Is there support for agents?", "Yes, support section helps with all issues."]
    ]
  };

  const faqs = faqData[role] || faqData.buyer;

  const half = Math.ceil(faqs.length / 2);

  return (
    <>
      <Navbar />

      <div className="faq-page">

        <div className="faq-title">
          <h1>Frequently Asked Questions</h1>
          <span>
            {role === "agent" ? "AGENT KNOWLEDGE BASE" : "FREEHOME KNOWLEDGE BASE"}
          </span>
        </div>

        <div className="faq-columns">

          {/* LEFT COLUMN */}
          <div className="faq-column">
            {faqs.slice(0, half).map((item, index) => (
              <div
                key={index}
                className={`faq-item ${open === index ? "active" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }
                >
                  <span>{item[0]}</span>
                  <span>{open === index ? "−" : "+"}</span>
                </button>

                {open === index && (
                  <div className="faq-answer">
                    {item[1]}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="faq-column">
            {faqs.slice(half).map((item, index) => {
              const realIndex = index + half;

              return (
                <div
                  key={realIndex}
                  className={`faq-item ${
                    open === realIndex ? "active" : ""
                  }`}
                >
                  <button
                    className="faq-question"
                    onClick={() =>
                      setOpen(
                        open === realIndex ? null : realIndex
                      )
                    }
                  >
                    <span>{item[0]}</span>
                    <span>
                      {open === realIndex ? "−" : "+"}
                    </span>
                  </button>

                  {open === realIndex && (
                    <div className="faq-answer">
                      {item[1]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default FAQ;