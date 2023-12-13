function ButtonFullPrimary({ onClick, type, children, className }) {
  const defaultClassName =
    "w-full px-4 py-3 font-bold text-white bg-[#d4793a] rounded hover:bg-[#ecbc9a] focus:outline-none focus:shadow-outline";
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

export default ButtonFullPrimary;
