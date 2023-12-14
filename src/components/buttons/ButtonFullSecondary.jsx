function ButtonFullSecondary({ onClick, type, children, className }) {
  const defaultClassName =
    "w-full px-4 py-3 font-bold text-white bg-[#58644C] rounded hover:bg-[#798072] focus:outline-none focus:shadow-outline";
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

export default ButtonFullSecondary;
