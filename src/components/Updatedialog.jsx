import InputField from "./InputField"

export default function Updatedialog({closeDialog},) {
  return (
    <div>
        <dialog open className="">
            <h1 className="text-center text-2xl font-bold py-3">Tilføj ny vare</h1>
            <form className="gap-y-2 px-10 grid">
              <InputField label="Produktnavn:" type="text" placeholder="Skriv navn på produkt her" />
              <InputField label="Pris:" type="text" placeholder="Skriv pris på varen her" />
            <button className="bg-[rgb(212,121,58)] hover:bg-[#ecbc9a] w-[100px] rounded-md mb-4 my-2 py-2 text-black font-medium text-xl" onClick={closeDialog}>Luk</button>
           <button className="bg-[rgb(212,121,58)] hover:bg-[#ecbc9a] w-[100px] rounded-md mb-4 my-2 py-2 text-black font-medium text-xl">Opdater</button>
            </form>
        </dialog>
    </div>
  )
}