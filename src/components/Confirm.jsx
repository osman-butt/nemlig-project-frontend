import { Link } from "react-router-dom";

export default function Confirm() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="relative w-[660px] h-[466px]">
        <div className="relative w-[664px] h-[466px] top-0 left-0">
          <div className="relative w-[660px] h-[466px] top-0 left-0 bg-[#e8e3d8] rounded-[8px]">
            <div className="absolute w-[352px] h-[75px] top-[30px] left-[57px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[36px] tracking-[0] leading-[normal]">
              Ordrebekræftelse
            </div>
            <div className="absolute w-[532px] h-[266px] top-[157px] left-[53px]">
              <p className="absolute w-[516px] top-0 left-[12px] [font-family:'Roboto-Bold',Helvetica] font-bold text-black text-[24px] tracking-[0] leading-[normal]">
                Tak for din ordre!
                <br />
                <br />
                Dit ordrenummer er #123012.
              </p>
              <Link to="/">
                <button
                  className="absolute w-[532px] h-[66px] top-[200px] left-0 [font-family:'Roboto-Bold',Helvetica] font-bold text-black text-[24px] tracking-[0] leading-[normal]"
                  alt="Bestil btn"
                  src="bestil-btn.png"
                >
                  {" "}
                  Tilbage til forsiden
                </button>
              </Link>
            </div>
          </div>
          <img
            className="absolute w-[522px] h-px top-[-2700px] left-[-5457px]"
            alt="Line"
            src="line-3.svg"
          />
        </div>
      </div>
    </div>
  );
}
