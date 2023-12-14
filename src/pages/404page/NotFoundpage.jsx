import image from "../../assets/hero.jpg";
import NotFoundContainer from "./NotFoundContainer";

function NotFoundpage() {
  return (
    <div
      className="bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <NotFoundContainer />
    </div>
  );
}

export default NotFoundpage;
