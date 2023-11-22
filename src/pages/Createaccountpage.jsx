import image from "../assets/hero.jpg";
import Header from "../components/Header";
import Createaccountform from "../components/Createaccountform";

export default function Createaccountpage() {
  return (
    <div
      className="h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Header />
      <Createaccountform />
    </div>
  );
}
