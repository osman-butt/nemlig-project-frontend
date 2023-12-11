export default function Snackbar({ showSnackbar }) {
  return (
    <div
      className={`bg-[#e8e3d8] w-[250px] h-14 p-2 m-auto flex rounded-md inset-0 top-[25rem] bg-opacity-90 fixed z-50 
      ${showSnackbar ? "" : "hidden"}`}
    >
      <p className="text-black m-auto font-bold">Produkt tilføjet</p>
      {/* <button className="bg-[#d4793a] p-1.5 rounded m-auto">Fortryd</button> */}
    </div>
  );
}
