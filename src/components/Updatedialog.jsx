import FormInput from "./FormInput";

export default function Updatedialog({ closeDialog, data }) {
  return (
    <div className="fixed inset-0 pt-10 items-center justify-center z-50 bg-black bg-opacity-50">
      <dialog open className="">
        <h1 className="text-center text-2xl font-bold py-3">Opdater vare</h1>
        <form className="gap-y-2 px-10 grid">
          <FormInput label="Produktnavn:" type="text" placeholder="Skriv navn på produkt her" value={data.product_name} />
          <FormInput label="Pris:" type="text" placeholder="Skriv pris på varen her" value={data.prices[0].price + " kr."} />
          <FormInput label="Billede:" type="text" placeholder="Indsæt link til billede her" value={data.images[0].image_url} />
          <div>
            <button
              className="bg-[rgb(212,121,58)] hover:bg-[#ecbc9a] w-[100px] rounded-md mb-4 my-2 py-2 text-black font-medium text-xl"
              onClick={closeDialog}
            >
              Luk
            </button>
            <button className="bg-[rgb(212,121,58)] hover:bg-[#ecbc9a] w-[100px] rounded-md ml-[7rem] mb-4 my-2 py-2 text-black font-medium text-xl">
              Opdater
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
