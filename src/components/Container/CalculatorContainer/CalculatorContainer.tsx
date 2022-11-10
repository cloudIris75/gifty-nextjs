import { Gifticon, Menu } from '@prisma/client';
import { useState } from 'react';
import useSWR from 'swr';
import Button from '../../Button';

interface CalculatorContainerProps {
  type?: 'gifticon' | 'menu';
}

interface GifticonResponse {
  ok: boolean;
  gifticons: Gifticon[];
}

interface MenuResponse {
  ok: boolean;
  menus: Menu[];
}

const CalculatorContainer: React.FC<CalculatorContainerProps> = ({
  type = 'menu',
}) => {
  const [gifticon, setGifticon] = useState<Gifticon>();
  const [menu, setMenu] = useState<Menu>();
  const { data: gifticonData } = useSWR<GifticonResponse>('/api/gifticons');
  const { data: menuData } = useSWR<MenuResponse>('/api/menus');

  const onSubtractButtonClick = () => {};

  const onAddButtonClick = () => {};

  return (
    <div className="flex flex-col items-between justify-center">
      <div className="flex items-center justify-end text-coffee-400 space-x-4">
        {type === 'menu' ? (
          <select
            name="category"
            id="category"
            required
            defaultValue="category"
            className="select"
          >
            <option value="category" disabled>
              카테고리
            </option>
            <option value="drinks">음료</option>
            <option value="food">푸드</option>
            {/* <option value="MD">MD</option> */}
          </select>
        ) : (
          ''
        )}
        <select
          name="name"
          id="name"
          required
          defaultValue="name"
          className="select"
        >
          <option value="name" disabled>
            {type === 'menu' ? '메뉴' : '기프티콘'}
          </option>
          {type === 'menu'
            ? menuData?.menus.map((menu) => (
                <option
                  key={menu.id}
                  value={menu.name}
                  onSelect={() => setMenu(menu)}
                >
                  {menu.name}
                </option>
              ))
            : gifticonData?.gifticons.map((gifticon) => (
                <option
                  key={gifticon.id}
                  value={gifticon.name}
                  onSelect={() => setGifticon(gifticon)}
                >
                  {gifticon.name}
                </option>
              ))}
        </select>
      </div>
      {menu || gifticon ? (
        <div className="flex justify-between px-2 pt-4">
          <div className="border border-coffee-400 w-16 h-16"> </div>

          <div className="flex flex-col items-end justify-between w-1/2">
            <div className="text-coffee-400 font-bold">
              {type === 'menu' ? menu?.name : gifticon?.name}
            </div>
            <div
              className={`flex w-full ${
                type === 'menu' ? 'justify-between' : 'justify-end'
              }`}
            >
              <div
                className={`${type === 'menu' ? 'flex' : 'hidden'} space-x-2`}
              >
                <Button
                  name="-"
                  onclick={onSubtractButtonClick}
                  classname="px-2"
                />
                <div className="text-coffee-400">1</div>
                <Button name="+" onclick={onAddButtonClick} classname="px-2" />
              </div>
              <div className="text-coffee-400">
                {type === 'menu' ? menu?.price : gifticon?.price}원
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default CalculatorContainer;
