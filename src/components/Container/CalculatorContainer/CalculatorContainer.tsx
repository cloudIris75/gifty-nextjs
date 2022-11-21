import { Gifticon, Menu } from '@prisma/client';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import Button from '../../Button';

interface CalculatorContainerProps {
  type?: 'gifticon' | 'menu';
  gifticon?: Gifticon;
  menu?: Menu;
  number?: number;
  setNumbers?: Dispatch<SetStateAction<number[]>>;
}

const CalculatorContainer: React.FC<CalculatorContainerProps> = ({
  type = 'menu',
  gifticon,
  menu,
  number = 1,
  setNumbers,
}) => {
  const onSubtractButtonClick = () => {
    if (number && number > 1) {
      const substractedNumber = number - 1;
      if (setNumbers) {
        const numbers = [substractedNumber];
        setNumbers(numbers);
      }
    }
  };

  const onAddButtonClick = () => {
    if (number && number < 5) {
      const addedNumber = number + 1;
      if (setNumbers) {
        const numbers = [addedNumber];
        setNumbers(numbers);
      }
    }
  };

  return (
    <div className="flex justify-between px-2 pt-4 space-x-4">
      <div className="flex items-center justify-center border border-coffee-400 w-16 h-16">
        <Image
          src={(type === 'menu' ? menu?.imgPath : gifticon?.imgPath) || ''}
          alt={type === 'menu' ? menu?.name : gifticon?.name}
          width={64}
          height={64}
        />
      </div>
      <div className="flex flex-col items-end justify-between w-3/4 space-y-2">
        <div className="text-coffee-400 font-bold">
          {type === 'menu' ? menu?.name : gifticon?.name}
        </div>
        <div
          className={`flex w-4/5 sm:w-3/5 ${
            type === 'menu' ? 'justify-between' : 'justify-end'
          }`}
        >
          <div className={`${type === 'menu' ? 'flex' : 'hidden'} space-x-2`}>
            <Button name="-" onclick={onSubtractButtonClick} classname="px-2" />
            <div className="text-coffee-400">{number}</div>
            <Button name="+" onclick={onAddButtonClick} classname="px-2" />
          </div>
          <div className="text-coffee-400">
            {type === 'menu'
              ? (menu?.price! * number).toLocaleString()
              : (gifticon?.price! * number).toLocaleString()}
            원
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorContainer;
