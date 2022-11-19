import { Menu } from '@prisma/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Button from '../../../components/Button';
import MenuContainer from '../../../components/Container/MenuContainer';
import Navbar from '../../../components/Navbar';
import MenuSelect from '../../../components/Select/MenuSelect';
import { Brand, BrandName } from '../../../lib/types/enums';

interface MenuResponse {
  ok: boolean;
  menus: Menu[];
}

const Menu: React.FC = () => {
  const router = useRouter();
  const brandName = router.query.brandName as Brand;
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('name');
  const [categorizedMenu, setCategorizedMenu] = useState<Menu[]>();
  const [sortedMenu, setSortedMenu] = useState<Menu[]>();
  const { data: menuData } = useSWR<MenuResponse>('/api/menus', fetcher);

  useEffect(() => {
    if (menuData) {
      if (category === 'drink') {
        const drinkMenu = menuData.menus.filter(
          (menu) => menu.category === '음료'
        );
        setCategorizedMenu(drinkMenu);
      } else if (category === 'food') {
        const foodMenu = menuData.menus.filter(
          (menu) => menu.category === '푸드'
        );
        setCategorizedMenu(foodMenu);
      } else {
        const allMenu = menuData.menus;
        setCategorizedMenu(allMenu);
      }
    }
  }, [menuData, category, sort, setCategorizedMenu]);

  useEffect(() => {
    if (categorizedMenu) {
      if (sort === 'descending') {
        const descendingMenu = categorizedMenu.sort(
          (a, b) => b.price - a.price
        );
        setSortedMenu(descendingMenu);
      } else if (sort === 'ascending') {
        const ascendingMenu = categorizedMenu.sort((a, b) => a.price - b.price);
        setSortedMenu(ascendingMenu);
      } else {
        const nameMenu = categorizedMenu.sort((a, b) =>
          a.name > b.name ? 1 : a.name < b.name ? -1 : 0
        );
        setSortedMenu(nameMenu);
      }
    }
  }, [categorizedMenu, sort, setSortedMenu]);

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center mx-8 my-4 pb-8 space-y-8">
        <h1 className="title">{BrandName.get(brandName)}</h1>
        <MenuSelect page="menu" setCategory={setCategory} setSort={setSort} />
        <div className="flex justify-center flex-wrap px-2 lg:px-52">
          {sortedMenu
            ? sortedMenu.map((menu) => (
                <MenuContainer
                  key={menu.id}
                  imgPath={menu.imgPath || ''}
                  name={menu.name}
                  price={menu.price}
                />
              ))
            : ''}
        </div>
        <Button
          onclick={() => router.push(`/brands/${brandName}/calculator`)}
          name="계산기로 돌아가기"
        />
      </main>
    </>
  );
};

export default Menu;
