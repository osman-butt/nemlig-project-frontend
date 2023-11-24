import image from "../assets/hero.jpg";
import Createaccountform from "../components/Createaccountform";
import Footer from "../components/Footer";

export default function Createaccountpage() {
  return (
    <>
      <div
        className="min-h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      >
        <Createaccountform />
      </div>
      <Footer />
    </>
  );
}
