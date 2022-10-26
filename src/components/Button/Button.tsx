interface ButtonProps {
  name: string;
  onclick?: () => void;
  width?: string;
}

const Button: React.FC<ButtonProps> = ({ onclick, name, width = 'w-48' }) => {
  return (
    <button
      onClick={onclick}
      className={`bg-coffee-400 py-2 rounded-3xl ${width}`}
    >
      {name}
    </button>
  );
};

export default Button;
