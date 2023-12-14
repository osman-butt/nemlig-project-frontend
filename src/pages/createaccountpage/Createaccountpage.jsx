import image from "../../assets/hero.jpg";
import Createaccountform from "./Createaccountform.jsx";
import Footer from "../../components/Footer.jsx";

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
