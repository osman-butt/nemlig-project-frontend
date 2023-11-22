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
        <div className="max-w-[1240px] p-4 w-full mx-auto text-center rounded flex flex-col font-general bg-[#e8e3d8]">
          <h1 className="text-3xl font-bold">Admin page</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Adminpage;
