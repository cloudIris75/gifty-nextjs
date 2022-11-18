import { Gifticon, Menu } from '@prisma/client';
import Button from '../../Button';

interface CalculatorContainerProps {
  type?: 'gifticon' | 'menu';
  gifticon?: Gifticon;
  menu?: Menu;
}

const CalculatorContainer: React.FC<CalculatorContainerProps> = ({
  type = 'menu',
  gifticon,
  menu,
}) => {
  const onSubtractButtonClick = () => {};

  const onAddButtonClick = () => {};

  return (
    <div className="flex justify-between px-2 pt-4">
      <div className="border border-coffee-400 w-16 h-16"> </div>
      <div className="flex flex-col items-end justify-between w-3/4 space-y-2">
        <div className="text-coffee-400 font-bold">
          {type === 'menu' ? menu?.name : gifticon?.name}
        </div>
        <div
          className={`flex w-3/5 ${
            type === 'menu' ? 'justify-between' : 'justify-end'
          }`}
        >
          <div className={`${type === 'menu' ? 'flex' : 'hidden'} space-x-2`}>
            <Button name="-" onclick={onSubtractButtonClick} classname="px-2" />
            <div className="text-coffee-400">1</div>
            <Button name="+" onclick={onAddButtonClick} classname="px-2" />
          </div>
          <div className="text-coffee-400">
            {type === 'menu'
              ? menu?.price.toLocaleString()
              : gifticon?.price.toLocaleString()}
            원
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorContainer;
