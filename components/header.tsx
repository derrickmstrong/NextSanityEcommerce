import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
          E-Store
        </Link>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Link href="/cart" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
            <ShoppingCart />
          </Link>
        </div>
      </nav>
    </header>
  );
}