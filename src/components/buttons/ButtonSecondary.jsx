function ButtonSecondary({ onClick, type, children, className }) {
  const defaultClassName =
    "bg-[#58644C] rounded hover:bg-[#798072] w-[200px] my-6 py-3 text-white font-bold  focus:outline-none focus:shadow-outline";
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

export default ButtonSecondary;
