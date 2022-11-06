import { useRouter } from 'next/router';
import Button from '../../../components/Button';
import Navbar from '../../../components/Navbar';
import { Brand, BrandName } from '../../../lib/types/enums';

const Menu: React.FC = () => {
  const router = useRouter();
  const brandName = router.query.brandName as Brand;

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center mx-8 my-4 pb-8 space-y-8">
        <h1 className="title">{BrandName.get(brandName)}</h1>
        <div className="flex text-coffee-400 space-x-4">
          <select
            name="category"
            id="category"
            required
            defaultValue="category"
            className="bg-coffee-100"
          >
            <option value="category" disabled>
              카테고리
            </option>
            <option value="drinks">음료</option>
            <option value="food">푸드</option>
            {/* <option value="MD">MD</option> */}
          </select>
          <select
            name="sort"
            id="sort"
            required
            defaultValue="sort"
            className="bg-coffee-100"
          >
            <option value="sort" disabled>
              정렬
            </option>
            <option value="name">이름순</option>
            <option value="descending">가격높은순</option>
            <option value="ascending">가격낮은순</option>
          </select>
        </div>
        <div></div>
        <Button
          onclick={() => router.push(`/brands/${brandName}/calculator`)}
          name="계산기로 돌아가기"
        />
      </main>
    </>
  );
};

export default Menu;
