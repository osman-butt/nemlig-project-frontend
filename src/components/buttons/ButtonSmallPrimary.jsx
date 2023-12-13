function ButtonSmallPrimary({ onClick, type, children, className }) {
  const defaultClassName =
    "bg-[#d4793a] hover:bg-[#ecbc9a] rounded-md text-white font-bold  focus:outline-none focus:shadow-outline";
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

export default ButtonSmallPrimary;
