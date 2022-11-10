interface MenuContainerProps {
  imgPath?: string;
  name?: string;
  price?: number;
}

const MenuContainer: React.FC<MenuContainerProps> = ({
  imgPath,
  name,
  price,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="border border-coffee-400 w-16 h-16"> </div>
      <div className="text-coffee-400 font-bold">{name}</div>
      <div className="text-coffee-400">{price}원</div>
    </div>
  );
};

export default MenuContainer;
