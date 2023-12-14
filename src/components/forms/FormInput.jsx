function FormInput({ label, type, value, onChange, placeholder }) {
  return (
    <label className="block mb-2 text-sm font-bold">
      {label}
      <input
        className="w-full px-4 py-3 mt-2 leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
}

export default FormInput;
