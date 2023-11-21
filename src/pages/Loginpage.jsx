import image from "../assets/hero.jpg";
import Header2 from "../components/Header2";
import Loginform from "../components/Loginform";


export default function Loginpage() {
  return (
    <div
      className="h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}>
      <Header2 />
      <Loginform />
      </div>
    
    
  );
}
