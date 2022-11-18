import { Gifticon, Menu } from '@prisma/client';
import { Dispatch, SetStateAction } from 'react';

interface MenuResponse {
  ok: boolean;
  menus: Menu[];
}

interface GifticonResponse {
  ok: boolean;
  gifticons: Gifticon[];
}

interface MenuSelectProps {
  page?: 'calculator' | 'menu';
  type?: 'menu' | 'gifticon';
  setMenuName?: Dispatch<SetStateAction<string>>;
  setGifticonName?: Dispatch<SetStateAction<string>>;
  menuData?: MenuResponse;
  gifticonData?: GifticonResponse;
}

const MenuSelect: React.FC<MenuSelectProps> = ({
  page = 'calculator',
  type = 'menu',
  setMenuName,
  setGifticonName,
  menuData,
  gifticonData,
}) => {
  return (
    <div className="flex items-center justify-end text-coffee-400 space-x-4">
      {type === 'menu' ? (
        <select
          name="category"
          id="category"
          required
          defaultValue="category"
          className="select w-20"
        >
          <option value="all">전체</option>
          <option value="drinks">음료</option>
          <option value="food">푸드</option>
          {/* <option value="MD">MD</option> */}
        </select>
      ) : (
        ''
      )}
      {page === 'calculator' ? (
        <select
          name="name"
          id="name"
          required
          defaultValue="name"
          className="select"
          onChange={(e) => {
            type === 'menu'
              ? setMenuName!(e.currentTarget.value)
              : setGifticonName!(e.currentTarget.value);
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
      ) : (
        <select
          name="sort"
          id="sort"
          required
          defaultValue="sort"
          className="select"
        >
          <option value="sort" disabled>
            정렬
          </option>
          <option value="name">이름순</option>
          <option value="descending">가격높은순</option>
          <option value="ascending">가격낮은순</option>
        </select>
      )}
    </div>
  );
};

export default MenuSelect;
