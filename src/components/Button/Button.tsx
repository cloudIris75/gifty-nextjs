interface ButtonProps {
  name: string;
  onclick?: () => void;
  classname?: string;
}

const Button: React.FC<ButtonProps> = ({
  onclick,
  name,
  classname = 'w-48 py-2',
}) => {
  return (
    <button
      onClick={onclick}
      className={`bg-coffee-400 rounded-3xl ${classname}`}
    >
      {name}
    </button>
  );
};

export default Button;
