import { useRouter } from 'next/router';
import Button from '../../../components/Button';
import Navbar from '../../../components/Navbar';

const Calculator: React.FC = () => {
  const router = useRouter();
  const brandName = router.query.brandName as string;

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center space-y-8 p-8">
        <div>
          <h3 className="title-container">기프티콘</h3>
        </div>
        <div className="flex flex-col space-y-2 items-center w-full">
          <hr className="border w-full" />
          <p>최종 계산 결과는 하단에서 확인할 수 있습니다.</p>
        </div>
        <div>
          <h3 className="title-container">메뉴 1</h3>
        </div>
        <div>
          <h3 className="title-container">메뉴 2</h3>
        </div>
        <div>
          <h3 className="title-container">메뉴 3</h3>
        </div>
        <div className="flex flex-col w-full text-right">
          <hr className="border w-full mb-2" />
          <p className="font-bold text-xl">n원</p>
          <p>기프티콘 가격보다 n원 부족해요!</p>
          <p>n원어치 추가 선택해 주세요.</p>
        </div>
        <div className="flex flex-col space-y-4">
          <Button
            name="추가할 수 있는 메뉴 보러가기"
            onclick={() => router.push(`/brands/${brandName}/menu`)}
            width="w-60"
          />
          <Button name="초기화하기" width="w-60" />
        </div>
      </main>
    </>
  );
};

export default Calculator;
