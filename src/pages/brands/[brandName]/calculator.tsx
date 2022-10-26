import Navbar from '../../../components/Navbar';

const Calculator: React.FC = () => {
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
        <div></div>
      </main>
    </>
  );
};

export default Calculator;
