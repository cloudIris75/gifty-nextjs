import { Gifticon, Menu } from '@prisma/client';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import CalculatorContainer from '../../Container/CalculatorContainer';

interface MenuSelectProps {
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

const MenuSelect: React.FC<MenuSelectProps> = ({ type = 'menu' }) => {
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
      <CalculatorContainer type={type} gifticon={gifticon} menu={menu} />
    </div>
  );
};

export default MenuSelect;
