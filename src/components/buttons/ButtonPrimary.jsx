function ButtonPrimary({ onClick, type, children, className }) {
  const defaultClassName =
    "bg-[#d4793a] hover:bg-[#ecbc9a] w-[200px] rounded-md my-6 py-3 text-white font-bold  focus:outline-none focus:shadow-outline";
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${defaultClassName} ${className || ""}`}
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
