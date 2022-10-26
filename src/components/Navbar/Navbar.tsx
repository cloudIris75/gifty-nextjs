import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 z-10 h-16 bg-coffee-200">
      <Link href="/">
        <a className="font-bold text-xl">GIFTY</a>
      </Link>
      <Link href="https://litt.ly/iris">
        <a>문의</a>
      </Link>
    </div>
  );
};

export default Navbar;
