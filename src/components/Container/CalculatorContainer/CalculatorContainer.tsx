import { Gifticon, Menu } from '@prisma/client';
import { useEffect, useState } from 'react';
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
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const [gifticonName, setGifticonName] = useState('');
  const [menuName, setMenuName] = useState('');
  const [gifticon, setGifticon] = useState<Gifticon>();
  const [menu, setMenu] = useState<Menu>();
  const { data: gifticonData } = useSWR<GifticonResponse>(
    '/api/gifticons',
    fetcher
  );
  const { data: menuData } = useSWR<MenuResponse>('/api/menus', fetcher);

  useEffect(() => {
    if (gifticonData && gifticonName) {
      const selectedGifticon = gifticonData.gifticons.find(
        (e) => e.name === gifticonName
      );
      setGifticon(selectedGifticon);
    }
  }, [gifticonData, gifticonName, setGifticon]);

  useEffect(() => {
    if (menuData && menuName) {
      const selectedMenu = menuData.menus.find((e) => e.name === menuName);
      setMenu(selectedMenu);
    }
  }, [menuData, menuName, setMenu]);

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
            className="select w-20"
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
          onChange={(e) => {
            type === 'menu'
              ? setMenuName(e.currentTarget.value)
              : setGifticonName(e.currentTarget.value);
          }}
        >
          <option value="name" disabled>
            {type === 'menu' ? '메뉴' : '기프티콘'}
          </option>
          {type === 'menu'
            ? menuData?.menus.map((menu) => (
                <option key={menu.id} value={menu.name}>
                  {menu.name}
                </option>
              ))
            : gifticonData?.gifticons.map((gifticon) => (
                <option key={gifticon.id} value={gifticon.name}>
                  {gifticon.name}
                </option>
              ))}
        </select>
      </div>
      {(type === 'menu' ? menu : gifticon) ? (
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
                {type === 'menu'
                  ? menu?.price.toLocaleString()
                  : gifticon?.price.toLocaleString()}
                원
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
