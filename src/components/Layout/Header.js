"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Image,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import SVG from "components/svg/SVG";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = {
    hirek: { href: "/hirek", text: "hírek" },
    program: { href: "/program", text: "program" },
    rolunk: { href: "/rolunk", text: "rólunk" },
    stab: { href: "/stab", text: "stáb" },
    galeria: { href: "/galeria", text: "galéria" },
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#913E35] text-white h-[100px] w-full flex-shrink-0 justify-start">
      <div className="flex w-full items-center">
        {/* Logo and Mobile Toggle Container */}
        <div className="flex items-center">
          <NavbarBrand className="flex-shrink-0 w-[100px]">
            <Image
              src="/opengraph-image.jpg"
              alt="ELTE Szemle Logo"
              radius="none"
              width={100}
              height={100}
              className="w-[100px] h-[100px] min-w-[100px] cursor-pointer -ml-6"
              onClick={() => {
                window.open("/", "_self");
              }}
            />
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-white w-12 h-12 p-3 rounded-lg hover:bg-white/10 transition"
          />
        </div>

        {/* Desktop Content */}
        <NavbarContent className="hidden sm:flex flex-1 items-center justify-center">
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

        {/* Spacer to balance the logo + toggle width */}
        <div className="flex-shrink-0 w-[140px] sm:w-[100px]" />
      </div>

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
