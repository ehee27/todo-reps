import { inputProps } from "@/types";

const Input = ({ name, type, placeholder, value }: inputProps) => {
  return (
    <input
      className="block w-full p-3 mx-2 border rounded-lg text-base bg-white text-zinc-500"
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
