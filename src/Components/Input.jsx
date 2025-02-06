/* eslint-disable react/prop-types */

function Input({ value, onChange, type, placeholder }) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      className={
        (type === "text" &&
          `h-full w-full rounded-md bg-neutral-700 px-2 placeholder:text-neutral-400 focus:ring focus:ring-neutral-600 focus:outline-none`) ||
        (type === "checkbox" && "checked:bg-blue-400")
      }
    />
  );
}

export default Input;
