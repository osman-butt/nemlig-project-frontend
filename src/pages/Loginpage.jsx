import image from "../assets/hero.jpg";
import Loginform from "../components/Loginform";
import Footer from "../components/Footer";

export default function Loginpage() {
  return (
    <>
      <div
        className="min-h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      >
        <Loginform />
      </div>
      <Footer />
    </>
  );
}
