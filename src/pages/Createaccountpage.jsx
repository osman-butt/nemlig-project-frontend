import image from "../assets/hero.jpg";
import Header2 from "../components/Header2";
import Createaccountform from "../components/Createaccountform";


export default function Createaccountpage() {
  return (
    <div
      className="h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}>
      <Header2 />
      <Createaccountform />
      </div>
    
    
  );
}