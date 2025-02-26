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
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
  Button,
} from "@heroui/react";
import { useNavigate } from "react-router-dom";
import SVG from "components/svg/SVG";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = {
    hirek: { href: "#hirek", text: "hírek" },
    rolunk: { href: "#rolunk", text: "rólunk" },
    stab: { href: "#stab", text: "stáb" },
    galeria: { href: "/galeria", text: "galéria" },
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#913E35] text-white h-[100px] w-full flex-shrink-0 justify-start"
      id="header"
    >
      <div className="flex w-full items-center">
        {/* Logo and Mobile Toggle Container */}
        <div className="flex items-center">
          <NavbarBrand className="flex-shrink-0 w-[100px]">
            <Image
              src="/images/feher.png"
              alt="ELTE Szemle Logo"
              radius="none"
              width={100}
              height={100}
              className="w-[100px] h-[100px] min-w-[100px] cursor-pointer bg-transparent"
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
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger className="text-white hover:opacity-80 transition-opacity ml-3 py-2 text-lg">
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent -mr-2"
                  endContent={<SVG type="chevron" />}
                  variant="light"
                >
                  program
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu>
              <DropdownItem
                key="napi_bontas"
                //startContent={icons.scale}
                className="h-14"
              >
                Napi bontás
              </DropdownItem>
              <DropdownItem
                key="fotokiallitas"
                //startContent={icons.activity}
                className="h-14"
              >
                Fotókiállítás
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                //startContent={icons.flash}
                className="h-14"
              >
                Szakmai programok
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          {Object.entries(links).map(([key, { href, text }], index, array) => (
            <React.Fragment key={key}>
              <NavbarItem>
                <Link
                  href={href}
                  className="text-white hover:opacity-80 transition-opacity px-4 py-2 text-lg"
                >
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
              onPress={() => {
                setIsMenuOpen(false);
              }}
            >
              {text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
