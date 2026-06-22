import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Catalogue from './pages/Catalogue.jsx';
import Cart from './pages/Cart.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import CarDetails from "./pages/CarDetails.jsx";
import Testimonials from './pages/Testimonials.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/panier" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route
  path="/temoignages"
  element={<Testimonials />}
/>
          <Route

path="/voiture/:id"

element={<CarDetails />}

/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
