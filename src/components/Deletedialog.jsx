export default function Deletedialog({ closeDialog }) {
  return (
    <div>
      <dialog open className="">
        <h1 className="text-center text-2xl font-bold py-3">
          Er du sikker på at du vil slette denne vare?
        </h1>
        <button
          className="bg-[rgb(212,121,58)] hover:bg-[#ecbc9a] w-[100px] rounded-md mb-4 my-2 py-2 text-black font-medium text-xl"
          onClick={closeDialog}
        >
          Luk
        </button>
        <button className="bg-[rgb(212,121,58)] hover:bg-[#ecbc9a] w-[100px] rounded-md mb-4 my-2 py-2 text-black font-medium text-xl">
          Slet
        </button>
      </dialog>
    </div>
  );
}
