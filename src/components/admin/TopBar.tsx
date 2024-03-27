"use client";

import { navLinks } from "@/lib/constants";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const TopBar = () => {
  const [dropdownMenu, setDropdownMenu] = React.useState(false);
  const pathname = usePathname();

  return (
    <div className='sticky top-0 z-20 w-full flex justify-between items-center px-8 py-4 bg-blue-2 shadow-xl lg:hidden'>
      <Link href='/'>
        <Image src='/logo.png' alt='logo' width={250} height={70} />
      </Link>

      <div className='flex gap-8 max-md:hidden'>
        {navLinks.map((link) => (
          <Link
            className={`flex gap-4 text-body-medium ${
              pathname === link.url ? "text-blue-1" : ""
            }`}
            href={link.url}
            key={link.label}
          >
            <p>{link.label}</p>
          </Link>
        ))}
      </div>

      <div className='relative flex gap-4 items-center'>
        <Menu
          className='cursor-pointer md:hidden'
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />
        {dropdownMenu && (
          <div className='absolute top-10 right-6 flex flex-col gap-8 p-5 bg-white shadow-xl rounded-lg'>
            {navLinks.map((link) => (
              <Link
                className={`flex gap-4 text-body-medium ${
                  pathname === link.url ? "text-blue-1" : ""
                }`}
                href={link.url}
                key={link.label}
              >
                {link.icon} <p>{link.label}</p>
              </Link>
            ))}
          </div>
        )}
        <UserButton />
      </div>
    </div>
  );
};

export default TopBar;
