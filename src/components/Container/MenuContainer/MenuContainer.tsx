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
      <div className="text-coffee-400 font-bold">menu name</div>
      <div className="text-coffee-400">n,000원</div>
    </div>
  );
};

export default MenuContainer;
