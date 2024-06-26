/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/CaSFDyVnMYY
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Commerce() {
  return (
    (<div className="flex flex-col min-h-screen">
      <header className="bg-gray-100 dark:bg-gray-800 py-4 shadow">
        <div
          className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="text-lg font-semibold">Acme Store</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#">
              Home
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#">
              Shop
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#">
              About
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#">
              Contact
            </Link>
          </nav>
          <div className="relative">
            <SearchIcon
              className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              className="w-full bg-white shadow-none appearance-none pl-8 md:w-[300px] dark:bg-gray-950"
              placeholder="Search products..."
              type="search" />
          </div>
        </div>
      </header>
      <main
        className="flex-1 container mx-auto px-4 md:px-6 py-8 md:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" />
      <div className="bg-gray-100 dark:bg-gray-800 py-4 shadow">
        <div
          className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <ShoppingCartIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            <span className="font-medium">Your Cart</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-medium">$</span>
            <Button size="sm" variant="outline">
              Checkout
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 py-4 shadow">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-4" />
        </div>
      </div>
    </div>)
  );
}

function Package2Icon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>)
  );
}


function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function ShoppingCartIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path
        d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>)
  );
}
