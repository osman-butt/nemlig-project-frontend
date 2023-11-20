import image from "../assets/hero.jpg";
import Nav from "../components/Nav";

export default function Loginpage() {
  return (
    <div
      className="h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}>
      <Nav />
    </div>
    
  );
}
