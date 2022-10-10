import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  const router = useRouter();

  const onMoveButtonClick = () => {
    router.push('/brands');
  };

  return (
    <>
      <Navbar />
      <main className="py-8 bg-cafe-100">
        <div className="flex flex-col text-cafe-400 items-center text-center space-y-6">
          <h1 className="text-2xl font-bold">
            기프티콘으로 결제할 때
            <br />더 이상 머뭇거리지 마세요!
          </h1>
          <div className="flex flex-col space-y-2">
            <p>
              계산대 앞에서 우물쭈물하느라
              <br />
              뒷사람 눈치 보는 건 이제 그만!
            </p>
            <p>
              원하는 메뉴 구성으로 쉽고 빠르게 계산하여
              <br />
              기프티콘을 사용할 수 있습니다.
            </p>
          </div>
          <button
            onClick={onMoveButtonClick}
            className="border border-cafe-400 bg-cafe-300 text-white px-8 py-2 rounded-2xl hover:shadow-inner shadow-md"
          >
            지금 계산하러 가기
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
