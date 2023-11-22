import image from "../assets/hero.jpg";
import Header from "../components/Header";
import Loginform from "../components/Loginform";

export default function Loginpage() {
  return (
    <div
      className="h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Header />
      <Loginform />
    </div>
  );
}
