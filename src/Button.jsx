/* eslint-disable react/prop-types */

function Button({ children, onClick, type }) {
  return (
    <button
      className={
        (type === "add" && "button") ||
        (type === "remove" && "button bg-neutral-600 hover:bg-neutral-700") ||
        (type === "delete" &&
          "h-6 w-6 rounded-full bg-red-600 text-center text-[16px] transition-all duration-300 hover:rotate-90 hover:cursor-pointer hover:bg-red-700")
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
