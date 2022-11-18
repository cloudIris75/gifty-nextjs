import Image from 'next/image';

interface MenuContainerProps {
  imgPath?: string;
  name?: string;
  price?: number;
}

const MenuContainer: React.FC<MenuContainerProps> = ({
  imgPath = '',
  name,
  price,
}) => {
  return (
    <div className="flex flex-col items-center w-20 py-4 mx-2 space-y-2 sm:w-32 md:w-40">
      <div className="border border-coffee-400 w-20 h-20">
        <Image src={imgPath} alt={name} width={80} height={80} />
      </div>
      <div className="text-coffee-400 font-bold text-xs text-center">
        {name}
      </div>
      <div className="text-coffee-400">{price?.toLocaleString()}원</div>
    </div>
  );
};

export default MenuContainer;
