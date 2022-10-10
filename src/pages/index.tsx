import type { NextPage } from 'next';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="flex flex-col text-center space-y-2">
          <h1 className="text-xl">
            기프티콘 사용할 때,
            <br />
            가격 계산 어려우세요?
          </h1>
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
      </main>
    </>
  );
};

export default Home;
