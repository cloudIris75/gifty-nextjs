import type { NextPage } from 'next';
import Image from 'next/image';
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
      <main className="py-8">
        <div className="flex flex-col items-center space-y-10">
          <h1 className="text-2xl text-coffee-400 font-bold">
            기프티콘으로 결제할 때, <br className="lg:hidden" />더 이상
            머뭇거리지 마세요!
          </h1>
          <div className="flex flex-col items-center space-y-10 bg-white rounded-3xl px-6 py-8 w-64 sm:w-1/2 lg:w-1/3">
            <div className="w-60">
              <Image
                alt="logo"
                src="https://gifty-bucket.s3.ap-northeast-2.amazonaws.com/images/logo.png"
                layout="responsive"
                width={100}
                height={50}
              />
            </div>
            <p className="text-coffee-400">
              계산대 앞에서 우물쭈물하느라 뒷사람 눈치 보는 건 이제 그만! 원하는
              메뉴 구성으로 쉽고 빠르게 계산하여 기프티콘을 사용할 수 있습니다.
              (문구 수정 예정)
            </p>
          </div>
          <button
            onClick={onMoveButtonClick}
            className="bg-coffee-400 px-6 py-2 rounded-3xl"
          >
            지금 계산하러 가기
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
