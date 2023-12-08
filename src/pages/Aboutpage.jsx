import image from "../assets/hero.jpg";
import Footer from "../components/Footer";
import About from "../components/About";

export default function Aboutpage() {
  return (
    <div
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <About />
      <Footer />
    </div>
  );
}
