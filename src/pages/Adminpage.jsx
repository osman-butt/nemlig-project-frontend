import image from "../assets/hero.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Adminpage() {
  return (
    <>
      <div
        className="min-h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      >
        <Header />
      </div>
      <Footer />
    </>
  );
}

export default Adminpage;
