import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Properties from "./pages/Properties/Properties";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";
import Contact from "./pages/Contact/Contact";
import ContactAgent from "./pages/ContactAgent/ContactAgent";
import PropertyContactAgent from "./pages/ContactAgent/PropertyContactAgent";
import Wishlist from "./pages/Wishlist/Wishlist";
import HomeLoan from "./pages/HomeLoan/HomeLoan";
import Compare from "./pages/Compare/Compare";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/UserProfile/UserProfile";
import About from "./pages/About/About";
import FAQ from "./pages/FAQ/FAQ";
import Admin from "./pages/Admin/Admin";
import ScrollToTop from "./components/ScrollToTop";
import { CompareProvider } from "./context/CompareContext";
import Landing from "./pages/Landing/Landing";
import AgentDashboard from "./pages/AgentDashboard/AgentDashboard";

function App() {
  return (
    <CompareProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-agent" element={<ContactAgent />} />
        <Route path="/contact-agent/:id" element={<PropertyContactAgent />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/home-loan" element={<HomeLoan />} />
       
        <Route path="/home" element={<Home />} />
        <Route path="/agent" element={<AgentDashboard />} />
      </Routes>
    </CompareProvider>
  );
}
export default App;