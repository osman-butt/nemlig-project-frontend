export default function SelectField({ name, value, onChange, options, placeholder }) {
  return (
    <label className="font-bold">
      {placeholder}:
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="mt-2 w-full px-4 py-3 leading-tight text-black border rounded shadow focus:outline-none focus:shadow-outline"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </label>
  );
}
