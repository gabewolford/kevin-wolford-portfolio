"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import menuIcon from "/public/images/menu-icon.svg";
import closeIcon from "/public/images/close-icon.svg";

export default function TheHeader() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const toggleBodyScroll = () => {
      document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    };

    toggleBodyScroll();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const isStudioRoute = pathname?.startsWith("/admin");

  const hiddenClass = isStudioRoute ? "hidden" : "";

  return (
    <header className={`${hiddenClass} border-b`}>
      <nav className="flex flex-row justify-between items-center">
        <Link
          className="border-r p-[18px] hover:bg-white hover:text-[#242738] transition-all duration-300"
          href="/"
        >
          <h1 className="text-2xl">Kevin Wolford</h1>
        </Link>

        {!isMobileMenuOpen && (
          <div className="md:hidden flex h-full border-l p-5">
            <button onClick={toggleMobileMenu}>
              <Image src={menuIcon} alt="Menu" />
            </button>
          </div>
        )}

        {isMobileMenuOpen && (
          <button
            onClick={toggleMobileMenu}
            className="md:hidden absolute top-4 right-4 z-50 animate__animated animate__rotateIn animate__faster"
          >
            <Image src={closeIcon} alt="Close" />
          </button>
        )}

        {isMobileMenuOpen && (
          <div className="animate__animated animate__slideInRight md:hidden fixed inset-0 bg-[#000000] bg-opacity-90 z-40 font-mono uppercase">
            <div className="flex flex-col h-full justify-center space-y-12 items-center">
              <Link href="/" onClick={toggleMobileMenu} className="text-xl">
                Home
              </Link>
              <Link href="/work" onClick={toggleMobileMenu} className="text-xl">
                Work
              </Link>
            </div>
          </div>
        )}

        <div className="uppercase text-sm hidden md:flex md:flex-row font-mono">
          <Link
            className="border-l p-6 hover:bg-white hover:text-[#242738] transition-all duration-300"
            href="/"
          >
            Home
          </Link>
          <Link
            className="border-l p-6 hover:bg-white hover:text-[#242738] transition-all duration-300"
            href="/work"
          >
            Work
          </Link>
        </div>
      </nav>
    </header>
  );
}
