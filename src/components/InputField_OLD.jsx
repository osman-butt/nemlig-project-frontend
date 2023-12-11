export default function InputField({ label, type, placeholder, className }) {
  return (
    <>
      <label className="text-[#000000] font-bold pt-2 pl-2">{label}</label>
      <input
        className={`border-2 border-[#d4793a] rounded-md w-full h-[50px] pl-4 col-span-2 ${className}`}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
}
