import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./FAQ.css";

function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    ["How do I search properties?", "Use filters such as location, type, budget, and status."],
    ["Are listings verified?", "Yes, all listings go through a verification process."],
    ["Can I contact agents directly?", "Yes, every property includes a Contact Agent option."],
    ["Is FreeHome free to use?", "Yes, searching and browsing properties is completely free."],
    ["Can I save properties?", "Yes, add properties to your wishlist."],
    ["How do I compare properties?", "Use the Compare feature to evaluate multiple listings."],
    ["Can I rent properties?", "Yes, rental and purchase properties are available."],
    ["What property types are available?", "Apartment, Villa, Townhouse, Commercial, Luxury, Land and PG Hostel."],
    ["How often are listings updated?", "New properties are added regularly."],
    ["Can I search by city?", "Yes, choose any available Australian city."],

    ["What is a PG Hostel?", "A shared accommodation with facilities for students and professionals."],
    ["Do PG Hostels include WiFi?", "Most PG Hostels include WiFi and shared amenities."],
    ["Can I find furnished properties?", "Yes, many listings are fully furnished."],
    ["How do I know a property's status?", "Each property clearly shows Buy or Rent status."],
    ["Can I view property images?", "Yes, every listing contains property photos."],
    ["Can I filter by budget?", "Yes, budget filters are available on the search page."],
    ["Are luxury homes available?", "Yes, premium luxury listings are available."],
    ["Do commercial properties include parking?", "Most commercial listings include parking information."],
    ["Can I buy land?", "Yes, land listings are available for purchase."],
    ["What zoning information is shown?", "Land listings display zoning details."],

    ["Can I access FreeHome on mobile?", "Yes, the platform is fully responsive."],
    ["Do I need an account?", "Browsing is available without an account."],
    ["Can I register as a buyer?", "Yes, registration is available."],
    ["How do I update my profile?", "Use the Profile section after login."],
    ["Can I remove wishlist items?", "Yes, wishlist items can be removed anytime."],
    ["Can agents upload listings?", "Currently listings are managed through the platform."],
    ["Are prices displayed in AUD?", "Yes, Australian Dollar pricing is used."],
    ["Can I search by state?", "Yes, all major Australian states are supported."],
    ["Do listings show property size?", "Yes, area details are included."],
    ["Can I view rental properties only?", "Yes, rental filtering is available."],

    ["Can I view properties for sale only?", "Yes, sale filtering is available."],
    ["What locations are supported?", "Major cities and states across Australia."],
    ["Can I find investment properties?", "Yes, many listings are suitable for investors."],
    ["How can I contact support?", "Use the Contact page."],
    ["Is there a newsletter?", "Yes, subscribe from the homepage."],
    ["Can I receive property updates?", "Yes, through newsletter subscriptions."],
    ["Are commercial offices available?", "Yes, office spaces are listed."],
    ["Can I find retail spaces?", "Yes, retail properties are available."],
    ["Can I find warehouses?", "Yes, warehouse listings are included."],
    ["Can I find medical facilities?", "Yes, some commercial listings are medical facilities."],

    ["Can I search luxury villas?", "Yes, luxury property filtering is supported."],
    ["How many properties are available?", "The platform contains hundreds of listings."],
    ["Can I compare prices?", "Yes, compare properties side-by-side."],
    ["Can I contact multiple agents?", "Yes, each property has its own agent contact option."],
    ["Do listings include descriptions?", "Yes, every property includes details."],
    ["Can I view property status quickly?", "Yes, status badges are displayed."],
    ["Can I revisit viewed properties?", "Save them to your wishlist."],
    ["Can I search land by zoning?", "Land details include zoning information."],
    ["Is FreeHome suitable for students?", "Yes, PG Hostels are available."],
    ["Can families find homes here?", "Yes, family homes are widely available."],

    ["Can businesses use FreeHome?", "Yes, commercial property listings are available."],
    ["Will more features be added?", "Yes, future updates will include additional capabilities."]
  ];

  return (
    <>
      <Navbar />

      <div className="faq-page">

        <div className="faq-title">
          <span>FREEHOME KNOWLEDGE BASE</span>
          <h1>Frequently Asked Questions</h1>
        </div>

        <div className="faq-stream">

          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${
                open === index ? "active" : ""
              }`}
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

      </div>

      <Footer />
    </>
  );
}

export default FAQ;