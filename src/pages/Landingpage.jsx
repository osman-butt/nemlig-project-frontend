import image from "../assets/hero.jpg";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Landingpage() {
  return (
    <div
      className="h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Hero />
      <Footer />
    </div>
  );
}
