import Link from 'next/link';
import Navbar from '../../components/Navbar';

const Brands: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="flex justify-center py-8">
        <div className="flex flex-col space-y-8">
          <Link href="/brands/starbucks/calculator">
            <a className="brand-container">스타벅스</a>
          </Link>
          <Link href="/brands/twosome/calculator">
            <a className="brand-container bg-coffee-300 pointer-events-none">
              투썸플레이스
              <br />
              (예정)
            </a>
          </Link>
          <Link href="/brands/ediya/calculator">
            <a className="brand-container bg-coffee-300 pointer-events-none">
              이디야커피
              <br />
              (예정)
            </a>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Brands;
