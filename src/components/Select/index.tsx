interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  children: React.ReactNode;
}

const Select = ({ children }: SelectProps) => {
  return (
    <select className="w-full rounded-2xl border-r-8 border-transparent bg-slate-800 px-4 py-2 font-bold text-white hover:opacity-85">
      {children}
    </select>
  );
};

export default Select;
