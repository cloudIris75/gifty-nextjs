import { useRouter } from 'next/router';
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import Navbar from '../../../components/Navbar';

const Calculator: React.FC = () => {
  const router = useRouter();
  const brandName = router.query.brandName as string;

  const onResetButtonClick = () => {};

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center mx-8 my-4 pb-8 space-y-8">
        <div className="flex flex-col space-y-8 px-4 py-6 bg-white w-full sm:w-2/3 md:w-1/2 lg:w-1/4">
          <h3 className="text-coffee-400 text-center font-bold text-xl">
            GIFTY
          </h3>
          <div>
            <h3 className="title-container">기프티콘</h3>
            <Container />
          </div>
          <div className="flex flex-col space-y-2 items-center w-full">
            <hr className="border-dashed border-coffee-400 w-full" />
            <p className="text-coffee-400 text-sm">
              최종 계산 결과는 하단에서 확인할 수 있습니다.
            </p>
          </div>
          <div>
            <h3 className="title-container">메뉴 1</h3>
            <Container />
          </div>
          <div>
            <h3 className="title-container">메뉴 2</h3>
            <Container />
          </div>
          <div>
            <h3 className="title-container">메뉴 3</h3>
            <Container />
          </div>
          <div className="flex flex-col w-full text-right">
            <hr className="border-dashed border-coffee-400 w-full mb-2" />
            <div className="flex justify-between font-bold text-lg mb-2">
              <p className="text-coffee-400">결제금액</p>
              <p className="text-coffee-400">n원</p>
            </div>
            <p className="text-coffee-400 text-sm">
              기프티콘 가격보다 n원 부족해요!
            </p>
            <p className="text-coffee-400 text-sm">
              n원어치 추가 선택해 주세요.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <Button
            name="추가할 수 있는 메뉴 보러가기"
            onclick={() => router.push(`/brands/${brandName}/menu`)}
            width="w-60"
          />
          <Button name="초기화하기" onclick={onResetButtonClick} width="w-60" />
        </div>
      </main>
    </>
  );
};

export default Calculator;
