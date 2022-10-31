import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../Button';

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between px-4 z-10 h-16 bg-coffee-200">
      <Link href="/">
        <a className="font-bold text-xl text-coffee-400">GIFTY</a>
      </Link>
      <Button
        name="문의"
        onclick={() => router.push('https://litt.ly/iris')}
        classname="text-sm w-14 py-2"
      />
    </div>
  );
};

export default Navbar;
