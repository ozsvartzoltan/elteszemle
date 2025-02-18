'use client';

import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Image, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from '@heroui/react';
import SVG from 'components/svg/SVG';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = {
    hirek: { href: '/hirek', text: 'hírek' },
    program: { href: '/program', text: 'program' },
    rolunk: { href: '/rolunk', text: 'rólunk' },
    stab: { href: '/stab', text: 'stáb' },
    galeria: { href: '/galeria', text: 'galéria' },
  };

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#913E35] text-white h-[100px] w-full justify-start border-none flex-shrink-0"
    >
      <NavbarBrand className="justify-start -mx-6">
        <Image
          src="/opengraph-image.jpg"
          alt="ELTE Szemle Logo"
          radius="none"
          width={100}
          height={100}
          className="w-full h-full aspect-square cursor-pointer"
          onClick={() => {
            window.open('/', '_self');
          }}
        />
      </NavbarBrand>
      {/* Mobile Toggle */}
      <NavbarContent className="sm:hidden ml-[120px] " justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="text-white" />
      </NavbarContent>

      {/* Desktop Content */}
      <NavbarContent className="hidden sm:flex items-center gap-3 -mr-4 justify-center" justify="center">
        {Object.entries(links).map(([key, { href, text }], index, array) => (
          <React.Fragment key={key}>
            <NavbarItem>
              <Link href={href} className="text-white hover:opacity-80 transition-opacity px-4 py-2 text-lg">
                {text}
              </Link>
            </NavbarItem>
            {index < array.length - 1 && (
              <NavbarItem>
                <SVG type="bulletSeparator" />
              </NavbarItem>
            )}
          </React.Fragment>
        ))}
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-[#913E35]/95 mt-8">
        {Object.entries(links).map(([key, { href, text }]) => (
          <NavbarMenuItem key={key}>
            <Link
              href={href}
              className="w-full text-white text-lg py-2 hover:opacity-80 transition-opacity items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
