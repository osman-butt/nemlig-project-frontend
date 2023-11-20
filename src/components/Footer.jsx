import { Link } from "react-router-dom";

export default function Footer() {
  const companyName = "nemlig.com";
  return (
    <div className="w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white bg-[#58644C]">
      <h1 className="font-bold text-center">
        <Link to="/about">Om os</Link>
      </h1>
      <h3 className="mt-auto text-center">TEST</h3>
      <div className="max-w-[1240px] m-auto">
        <h1 className="w-full m-auto text-3xl font-bold text-[#d4793a]">
          {companyName}
        </h1>
        <p className="pt-2">nemlig.com A/S</p>
        <p>Banemarksvej 58</p>
        <p>2605 Brøndby</p>
        <p>CVR 33070861</p>
        <p className="font-extrabold text-[#d4793a] pt-2">70 33 72 33</p>
        <p className="font-extrabold text-[#d4793a]">kontakt@nemlig.com</p>
      </div>
    </div>
  );
}
