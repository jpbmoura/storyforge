interface InputProps extends React.HTMLProps<HTMLInputElement> {
  placeholder?: string;
}

const Input = ({ placeholder }: InputProps) => {
  return (
    <input
      className="w-full rounded-2xl bg-slate-800 px-4 py-2 font-bold text-white hover:opacity-85"
      placeholder={placeholder}
    />
  );
};

export default Input;
