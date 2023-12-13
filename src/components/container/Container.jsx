function Container({ children, maxWidth }) {
  return (
    <div
      className={`max-w-[${maxWidth}] w-full min-h-screen mx-auto text-center flex flex-col font-general`}
    >
      <div className="flex flex-row justify-center mt-20 bg-[#e8e3d8] rounded">
        <section className="container w-full p-4 mb-4 rounded md:p-10">
          {children}
        </section>
      </div>
    </div>
  );
}

export default Container;
