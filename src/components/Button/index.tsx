interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="rounded-2xl bg-amber-700 px-4 py-2 font-bold transition-all duration-200 ease-in-out hover:bg-amber-600 active:opacity-80">
      {children}
    </button>
  );
};

export default Button;
