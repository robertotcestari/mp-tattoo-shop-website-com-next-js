'use client';

import Image from 'next/image';
import logo from '@/app/_assets/logo.svg';
import { londrinaSolid } from '../_lib/fonts';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (currentPath: string, pathname: string) => {
    if (currentPath.includes(pathname)) return 'underline';
  };

  return (
    <nav
      className={`container flex flex-col md:flex-row  justify-between py-8 ${londrinaSolid.className}`}
    >
      <Link href='/' className='mb-6'>
        <Image src={logo} alt="Logotipo da página" />
      </Link>
      <ul className="flex gap-6 md:text-3xl text-xl">
        <li className={`${isActive(pathname, 'servicos')}`}>
          <Link href="/servicos">Serviços</Link>
        </li>
        <li className={`${isActive(pathname, 'sobre')}`}>
          <Link href="/sobre">Sobre Mim</Link>
        </li>
        <li>
          <Link href="/contato" className='flex flex-col'>
            <span className={`text-right ${isActive(pathname, 'contato')}`}>
              Contato
              <br />
            </span>
            <span className="hidden md:flex text-xs text-zinc-400 font-extralight gap-1 items-center">
              <FaWhatsapp />
              (+11 99999 9999)
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
