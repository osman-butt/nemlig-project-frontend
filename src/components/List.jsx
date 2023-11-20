import Listitem from "./Listitem";

function List() {
  return (
    <div className="max-w-[900px] p-4 mt-[-96px] w-full min-h-screen mx-auto text-center flex flex-col font-general">
      <div className="flex flex-row justify-center mt-20 bg-[#e8e3d8] rounded">
        <section className="container w-full p-4 mb-4 rounded md:p-10">
          <h1 className="pb-2 text-4xl text-left md:pb-4">Din kurv</h1>
          <table className="w-[100%] select-none" id="basket">
            <thead className="border-b-2 border-black">
              <tr id="sorting" className="text-left">
                <th className="hidden md:block"></th>
                <th></th>
                <th></th>
                <th className="text-center"></th>
              </tr>
            </thead>
            <tbody className="">
              <Listitem />
              <Listitem />
              <Listitem />
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default List;
