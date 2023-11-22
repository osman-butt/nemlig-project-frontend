import { Link } from "react-router-dom";


export default function Adminhead() {
    return (

    <div className="flex justify-between items-center h-24 max-w-full mx-auto px-4 text-black font-medium">   
    <h1 className="text-5xl font-bold text-[#d4793a]">Admin</h1> 

    <Link to="/login">
    <button className="bg-[#d4793a] hover:bg-[#ecbc9a] w-[100px] absolute right-4 top-0 rounded-md my-4 mx-auto py-2 text-black font-medium text-xl">
        Log ud
    </button>
    </Link>
</div>
    );
  }