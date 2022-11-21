import { Gifticon, Menu } from '@prisma/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Button from '../../../components/Button';
import CalculatorContainer from '../../../components/Container/CalculatorContainer';
import Navbar from '../../../components/Navbar';
import MenuSelect from '../../../components/Select/MenuSelect';

interface GifticonResponse {
  ok: boolean;
  gifticons: Gifticon[];
}

interface MenuResponse {
  ok: boolean;
  menus: Menu[];
}

const Calculator: React.FC = () => {
  const router = useRouter();
  const brandName = router.query.brandName as string;
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const [gifticonName, setGifticonName] = useState('');
  const [menuName, setMenuName] = useState('');
  const [gifticon, setGifticon] = useState<Gifticon>();
  const [menus, setMenus] = useState<Menu[]>();
  const [numbers, setNumbers] = useState<number[]>([1]);
  const [result, setResult] = useState(0);
  const [change, setChange] = useState(0);
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
  }, [gifticonData, gifticonName]);

  useEffect(() => {
    if (menuData && menuName) {
      const selectedMenu = menuData.menus.find((e) => e.name === menuName);
      const menus = [selectedMenu] as Menu[];
      setMenus(menus);
    }
  }, [menuData, menuName]);

  useEffect(() => {
    if (gifticon && menus) {
      const resultPrice = menus[0].price * numbers[0];
      const changePrice = gifticon.price - resultPrice;
      setResult(resultPrice);
      setChange(changePrice);
    }
  }, [gifticon, menus, numbers]);

  const onSubtractButtonClick = () => {};

  const onAddButtonClick = () => {};

  const onResetButtonClick = () => {};

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center mx-8 my-4 pb-8 space-y-8">
        <div className="flex flex-col space-y-6 px-4 py-6 bg-white w-full sm:w-2/3 md:w-1/2 lg:w-1/4 shadow-md">
          <h3 className="text-coffee-400 text-center font-bold text-xl">
            GIFTY
          </h3>
          <div className="flex flex-col items-between justify-center">
            <MenuSelect
              type="gifticon"
              setGifticonName={setGifticonName}
              gifticonData={gifticonData}
            />
            {gifticon ? (
              <CalculatorContainer type="gifticon" gifticon={gifticon} />
            ) : (
              ''
            )}
          </div>
          <div className="flex flex-col space-y-6 dashed-line">
            <div className="flex justify-end space-x-2">
              <Button
                name="삭제"
                onclick={onSubtractButtonClick}
                classname="text-sm w-12 py-1"
              />
              <Button
                name="추가"
                onclick={onAddButtonClick}
                classname="text-sm w-12 py-1"
              />
            </div>
            <div className="flex flex-col space-y-8">
              <div className="flex flex-col items-between justify-center">
                <MenuSelect setMenuName={setMenuName} menuData={menuData} />
                {menus ? (
                  <CalculatorContainer
                    menu={menus[0]}
                    number={numbers[0]}
                    setNumbers={setNumbers}
                  />
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full text-right dashed-line">
            <div className="flex justify-between font-bold text-lg mb-2">
              <p className="text-coffee-400">결제금액</p>
              <p className="text-coffee-400">{result.toLocaleString()}원</p>
            </div>
            {change > 0 ? (
              <>
                <p className="text-coffee-400 text-sm">
                  기프티콘 가격보다 {change.toLocaleString()}원 부족해요!
                </p>
                <p className="text-coffee-400 text-sm">
                  {change.toLocaleString()}원어치 추가 선택해 주세요.
                </p>
              </>
            ) : (
              <>
                <p className="text-coffee-400 text-sm">
                  기프티콘 가격보다 {Math.abs(change).toLocaleString()}원
                  많아요!
                </p>
                <p className="text-coffee-400 text-sm">
                  {Math.abs(change).toLocaleString()}원 차액 결제해 주세요.
                </p>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <Button
            name="추가할 수 있는 메뉴 보러가기"
            onclick={() => router.push(`/brands/${brandName}/menu`)}
            classname="w-60 py-2"
          />
          <Button
            name="초기화하기"
            onclick={onResetButtonClick}
            classname="w-60 py-2"
          />
        </div>
      </main>
    </>
  );
};

export default Calculator;
