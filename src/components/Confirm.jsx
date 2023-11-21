import { Link } from "react-router-dom";

export default function Confirm() {
  return (
    <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
      <div className="relative">
        <div className="relative">
          <div className="relative w-[660px] h-[466px] top-0 left-0 bg-[#e8e3d8] rounded-[8px]">
            <div className="absolute w-[352px] h-[75px] top-[30px] left-[57px] [font-general] font-normal text-black text-[36px] tracking-[0] leading-[normal]">
              Ordrebekræftelse
            </div>
            <div className="absolute w-[532px] h-[266px] top-[157px] left-[53px]">
              <p className="absolute w-[516px] top-0 left-[12px] [font-general] font-bold text-black md:text-2xl sm:text-1xl md:py-1 tracking-[0] leading-[normal]">
                Tak for din ordre!
                <br />
                <br />
                Dit ordrenummer er #123012.
              </p>
              <Link to="/">
                <button
                  className="absolute w-[532px] h-[66px] top-[200px] left-0 [font-general] font-bold text-white text-[24px] tracking-[0] leading-[normal] border border-black rounded-md px-4 bg-[#58644c]"
                  alt="Bestil btn"
                  src="bestil-btn.png"
                >
                  {" "}
                  Tilbage til forsiden
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
