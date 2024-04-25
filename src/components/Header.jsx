'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

function Header(){
  const pathname = usePathname();
  return (
    <header>
      <h1>Todo List :)</h1>
      <nav>
        <div>
          <ul>
            <li><Link className={ pathname === '/' ? 'menu-selected' : 'memu' } href="/">Home</Link></li>
            <li><Link className={ pathname === '/about' ? 'menu-selected' : 'memu' } href="/about">About</Link></li>
            <li><Link className={ pathname === '/list' ? 'menu-selected' : 'memu' } href="/list">TodoList</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;