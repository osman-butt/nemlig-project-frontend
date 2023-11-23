import { AiOutlineEdit, AiOutlineClose } from "react-icons/ai";


export default function Admintable() {
    const editIcon = <AiOutlineEdit size={30}/>
    const deleteIcon = <AiOutlineClose size={30}/>
   
  return (
    <div className="font-general">
        <div className="bg-[#e8e3d8] bg-opacity- my-5 py-2 max-w-[1240px] mx-auto">
    <button className="bg-[rgb(212,121,58)] hover:bg-[#ecbc9a] w-[100px] rounded-md my-4 ml-3 py-2 text-black font-medium text-xl">
        Opret
    </button>
    

    <div className="mx-3">
    <table className="border-black border-solid border-2 w-full font-[700]">

  <tr className="border-black border-solid border-2 text-center text-xl md:text-2xl">
    <td className="border-black border-solid border-2">#</td>
    <td className="border-black border-solid border-2">Produktnavn</td>
    <td className="border-black border-solid border-2">Pris</td>
    <td className="border-black border-solid border-2">Opdater</td>
    <td className="border-black border-solid border-2">Slet</td>
  </tr>

  <tr className="border-black border-solid border-2 text-center">
    <td className="border-black border-solid border-2">1</td>
    <td className="border-black border-solid border-2">Kanel</td>
    <td className="border-black border-solid border-2">10</td>
    <td className="border-black border-solid border-2 hover:text-[#d4793a] cursor-pointer text-center align-middle">{editIcon}</td>
    <td className="border-black border-solid border-2 hover:text-[#d4793a] cursor-pointer">{deleteIcon}</td>
  </tr>

  <tr className="border-black border-solid border-2 text-center">
    <td className="border-black border-solid border-2">2</td>
    <td className="border-black border-solid border-2">Syltede agurker</td>
    <td className="border-black border-solid border-2">123</td>
    <td className="border-black border-solid border-2 hover:text-[#d4793a] cursor-pointer">{editIcon}</td>
    <td className="border-black border-solid border-2 hover:text-[#d4793a] cursor-pointer">{deleteIcon}</td>
  </tr>

  <tr className="border-black border-solid border-2 text-center">
    <td className="border-black border-solid border-2">3</td>
    <td className="border-black border-solid border-2">Citronmåne</td>
    <td className="border-black border-solid border-2">100</td>
    <td className="border-black border-solid border-2 hover:text-[#d4793a] cursor-pointer">{editIcon}</td>
    <td className="border-black border-solid border-2 hover:text-[#d4793a] cursor-pointer">{deleteIcon}</td>
  </tr>

  <tr className="border-black border-solid border-2 text-center">
    <td className="border-black border-solid border-2">4</td>
    <td className="border-black border-solid border-2">Ristede løg</td>
    <td className="border-black border-solid border-2">321</td>
    <td className="border-black border-solid border-2 hover:text-[#d4793a] cursor-pointer">{editIcon}</td>
    <td className="border-black border-solid border-2 hover:text-[#d4793a] cursor-pointer">{deleteIcon}</td>
  </tr>

  <tr className="border-black border-solid border-2 text-center">
    <td className="border-black border-solid border-2">5</td>
    <td className="border-black border-solid border-2">Rugbrød</td>
    <td className="border-black border-solid border-2">12</td>
    <td className="border-black border-solid border-2 hover:text-[#d4793a] cursor-pointer">{editIcon}</td>
    <td className="border-black border-solid border-2 hover:text-[#d4793a] cursor-pointer">{deleteIcon}</td>
  </tr>

  <tr className="border-black border-solid border-2 text-center">
    <td className="border-black border-solid border-2">6</td>
    <td className="border-black border-solid border-2">Leverdreng</td>
    <td className="border-black border-solid border-2">232130</td>
    <td className="border-black border-solid border-2 hover:text-[#d4793a] cursor-pointer">{editIcon}</td>
    <td className="border-black border-solid border-2 hover:text-[#d4793a] cursor-pointer">{deleteIcon}</td>
  </tr>

  <tr className="border-black border-solid border-2 text-center">
    <td className="border-black border-solid border-2">7</td>
    <td className="border-black border-solid border-2">Pøls</td>
    <td className="border-black border-solid border-2">2510</td>
    <td className="border-black border-solid border-2 hover:text-[#d4793a] cursor-pointer">{editIcon}</td>
    <td className="border-black border-solid border-2 hover:text-[#d4793a] cursor-pointer">{deleteIcon}</td>
  </tr>
  <tr className="border-black border-solid border-2 text-center">
    <td className="border-black border-solid border-2">8</td>
    <td className="border-black border-solid border-2">Torsk</td>
    <td className="border-black border-solid border-2">240</td>
    <td className="border-black border-solid border-2 hover:text-[#d4793a] cursor-pointer">{editIcon}</td>
    <td className="border-black border-solid border-2 hover:text-[#d4793a] cursor-pointer">{deleteIcon}</td>
  </tr>
  <tr className="border-black border-solid border-2 text-center">
    <td className="border-black border-solid border-2">9</td>
    <td className="border-black border-solid border-2">Salami</td>
    <td className="border-black border-solid border-2">20</td>
    <td className="border-black border-solid border-2 hover:text-[#d4793a] cursor-pointer">{editIcon}</td>
    <td className="border-black border-solid border-2 hover:text-[#d4793a] cursor-pointer">{deleteIcon}</td>
  </tr>
  <tr className="border-black border-solid border-2 text-center">
    <td className="border-black border-solid border-2">10</td>
    <td className="border-black border-solid border-2">Havregryn</td>
    <td className="border-black border-solid border-2">1</td>
    <td className="border-black border-solid border-2 hover:text-[#d4793a] cursor-pointer">{editIcon}</td>
    <td className="border-black border-solid border-2 hover:text-[#d4793a] cursor-pointer">{deleteIcon}</td>
  </tr>

</table>
</div>

 </div>
 </div>
  )
}
