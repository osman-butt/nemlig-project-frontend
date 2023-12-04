import image from "../assets/hero.jpg";
import Footer from "../components/Footer";
import NotFoundContainer from "../components/NotFoundContainer";

function NotFoundpage() {
  return (
    <div
      className="bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <NotFoundContainer />
      <Footer />
    </div>
  );
}

export default NotFoundpage;
