import image from "../assets/hero.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Landingpage() {
  return (
    <div className="h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}>
      <Header />
      <Hero />
      <Navbar />
      <Footer />
    </div>
  );
}
