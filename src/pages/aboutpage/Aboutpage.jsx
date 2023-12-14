import image from "../../assets/hero.jpg";
import About from "./About";

export default function Aboutpage() {
  return (
    <div
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <About />
    </div>
  );
}
