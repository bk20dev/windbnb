const Field = ({ name, placeholder, value, setValue, readOnly }) => (
  <div className="relative rounded-2xl">
    <p className="absolute left-7 top-3 text-tiny font-bold uppercase pointer-events-none">
      {name.toUpperCase()}
    </p>
    <input
      className="text-sm bg-transparent border outline-none border-transparent focus:border-gray-700 rounded-2xl px-7 pt-7 pb-3 w-full"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      readOnly={readOnly}
    />
  </div>
);

export default Field;
