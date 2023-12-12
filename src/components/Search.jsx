import { useState } from "react";
export default function Search({ handleSort, handleFilter, handleSearch }) {

const [inputValue, setInputValue] = useState("");

function handleSubmit(e){
  e.preventDefault();
  handleSearch(inputValue)
}
  return (
    <div className="max-w-[1240px] flex flex-row justify-center m-auto mt-4 font-general align-middle gap-10">
      <form onSubmit={handleSubmit}className="flex flex-row justify-center gap-4">
        <input
          type="text"
          placeholder="Søg efter varer..."
          className="lg:w-[535px] h-[53px] bg-white rounded font-normal text-black text-[20px] pl-4"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button className="h-[53px] px-4 bg-[#d4793a] rounded font-normal text-black lg:text-[20px] md:text-[20px] sm:text-[15px] hover:bg-[#ecbc9a]">
          Søg
        </button>
      </form>
      <div className="hidden gap-4 md:flex">
        <select
          onChange={e => handleSort(e.target.value)}
          className="h-[53px] px-4 bg-white rounded font-normal text-[20px] text-black  hover:bg-[#ecbc9a]"
        >
          <option value="">Sorter efter:</option>
          <option value="asc">Alfabetisk</option>
          <option value="low-high">Pris (lav-høj)</option>
          <option value="high-low">Pris (høj-lav)</option>
        </select>
        <select 
        onChange={e => handleFilter(e.target.value)}
        className="h-[53px] px-4 bg-white rounded font-normal text-[20px] text-black  hover:bg-[#ecbc9a]"
        >
          <option value="">Filtrer efter</option>
          <option value="økologi">Økologi</option>
          <option value="ecocert">Ecocert</option>
          <option value="MSC">MSC</option>
          <option value="ikke tilsat sukker">Sukkerfri</option>
          <option value="laktose fri">Laktose fri</option>
          <option value="gluten fri">Gluten fri</option>
          <option value="gram slot">Gram slot</option>
          <option value="nøglehul">Nøglehul</option>
          <option value="fairtrade">Fairtrade</option>
          <option value="svanemærket">Svanemærket</option>
          <option value="fuldkorn">Fuldkorn</option>
          <option value="ecolabel">Ecolabel</option>
          <option value="dansk">Dansk</option>
          <option value="Asthma Allergy Nordic">Asthma Allergy Nordic</option>
          <option value="Rainforest Alliance">Rainforest Alliance</option>
          <option value="Bedre dyrevelfærd 1">Bedre dyrevelfærd 1</option>
          <option value="Bedre dyrevelfærd 2">Bedre dyrevelfærd 2</option>
          <option value="Bedre dyrevelfærd 3">Bedre dyrevelfærd 3</option>
          </select>
      </div>
    </div>
  );
}
