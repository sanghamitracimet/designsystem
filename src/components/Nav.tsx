import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Nav = ({ toggleSideNav }: { toggleSideNav: () => void }) => {
  return (
    <div className="w-full p-4 border-b-2 border-b-lightGray">
      <div className="flex justify-between items-center">
        {/* Hamburger icon visible only on mobile (small screens) */}
        <div className="lg:hidden">
          <GiHamburgerMenu
            className="w-6 h-6 cursor-pointer"
            onClick={toggleSideNav}
          />
        </div>

        {/* Navigation links visible on large screens and up */}
        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
