import Table from "./Table.jsx";
import image from "../../assets/hero.jpg";

function ProfilePage() {
  return (
    <div
      className="bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Table />
    </div>
  );
}

export default ProfilePage;
