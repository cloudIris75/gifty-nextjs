import { Menu } from '@prisma/client';
import { useRouter } from 'next/router';
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
  const { data: menuData } = useSWR<MenuResponse>('/api/menus', fetcher);

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center mx-8 my-4 pb-8 space-y-8">
        <h1 className="title">{BrandName.get(brandName)}</h1>
        <MenuSelect page="menu" />
        <div className="flex justify-center flex-wrap px-2 lg:px-52">
          {menuData
            ? menuData.menus.map((menu) => (
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
