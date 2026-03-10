"use client"

import React, { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Image, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react"
import SVG from "components/svg/SVG"
import { headerImage, logo_2026, links, programLinks } from "utils/const"
import { useData } from "../../contexts/DataContext"
import { useTheme } from "../../contexts/ThemeContext"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProgramDropdownOpen, setIsProgramDropdownOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { year, changeYear } = useData()
  const { colors } = useTheme()

  const scrollToSection = (targetId) => {
    setIsMenuOpen(false)
    setTimeout(() => {
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      } else {
        console.error("Target not found:", targetId)
      }
    }, 100)
  }

  const handleNavigation = (e, targetId) => {
    if (location.pathname === "/") {
      scrollToSection(targetId)
    } else {
      navigate("/")
      setTimeout(() => scrollToSection(targetId), 500)
    }
  }

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="text-white h-[100px] w-full flex-shrink-0"
      style={{ backgroundColor: colors.mainColor }}
    >
      <div className="container mx-auto flex items-center justify-between w-full">
        <NavbarBrand className="flex-shrink-0">
          <Image
            src={(year === 2026 ? logo_2026 : headerImage) || "/placeholder.svg"}
            alt="ELTE Szemle Logo"
            radius="none"
            width={year === 2026 ? 90 : 100}
            height={year === 2026 ? 90 : 100}
            className={
              year === 2026
                ? "w-[90px] h-[90px] min-w-[90px] min-h-[90px] cursor-pointer bg-transparent -ml-6"
                : "w-[100px] h-[100px] min-w-[100px] cursor-pointer bg-transparent -ml-6"
            }
            onClick={() => {
              setIsMenuOpen(false)
              navigate("/")
            }}
          />
        </NavbarBrand>

        <NavbarContent className="hidden custom:flex justify-center absolute left-1/2 transform -translate-x-1/2">
          <Dropdown classNames={{ content: "bg-black" }}>
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
            <DropdownMenu className="bg-black text-white rounded-none border-none p-0">
              {programLinks
                .filter(({ key }) => !(key === 'fotokiallitas' && year === 2026))
                .map(({ key, text, href }) => (
                  <DropdownItem key={key} className="h-14" href={href}>
                    {text}
                  </DropdownItem>
                ))}
            </DropdownMenu>
          </Dropdown>

          {Object.entries(links).map(([key, { href, text }], index, array) => (
            <React.Fragment key={key}>
              <NavbarItem>
                {href.startsWith("#") ? (
                  <Link
                    href={href}
                    onPress={(e) => handleNavigation(e, href.substring(1))}
                    className="text-white hover:opacity-80 transition-opacity px-4 py-2 text-lg"
                  >
                    {text}
                  </Link>
                ) : (
                  <Link
                    href={href}
                    className="text-white hover:opacity-80 transition-opacity px-4 py-2 text-lg"
                  >
                    {text}
                  </Link>
                )}
              </NavbarItem>
              {index < array.length - 1 && (
                <NavbarItem>
                  <SVG type="bulletSeparator" />
                </NavbarItem>
              )}
            </React.Fragment>
          ))}

          {/* Year Selector Dropdown */}
          <NavbarItem>
            <Dropdown classNames={{ content: "bg-black" }}>
              <DropdownTrigger className="text-white hover:opacity-80 transition-opacity px-4 py-2 text-lg cursor-pointer">
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white text-lg"
                  variant="light"
                >
                  {year}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Year selection"
                className="bg-black text-white rounded-none border-none p-0"
                selectedKeys={[year.toString()]}
              >
                <DropdownItem
                  key="2025"
                  onPress={() => changeYear(2025)}
                  className="h-14"
                >
                  2025
                </DropdownItem>
                <DropdownItem
                  key="2026"
                  onPress={() => changeYear(2026)}
                  className="h-14"
                >
                  2026
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent>

        <div className="flex custom:hidden">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-white w-16 h-16 p-4 rounded-xl hover:bg-white/10 transition flex justify-center items-center"
          />
        </div>
      </div>

      <NavbarMenu className="pt-16" style={{ backgroundColor: colors.mainColor }}>
        <NavbarMenuItem>
          <Link
            onPress={() => setIsProgramDropdownOpen(!isProgramDropdownOpen)}
            className="w-full text-white text-lg py-2 hover:opacity-80 transition-opacity items-center hover:cursor-pointer flex"
          >
            program
            <SVG type={isProgramDropdownOpen ? "chevronUp" : "chevronDown"} />
          </Link>
        </NavbarMenuItem>
        {isProgramDropdownOpen &&
          programLinks
            .filter(({ key }) => !(key === 'fotokiallitas' && year === 2026))
            .map(({ key, href, text }) => (
              <NavbarMenuItem key={key} className="ml-4">
                <Link
                  href={href}
                  className="w-full text-white text-lg py-2 hover:opacity-80 transition-opacity"
                  onPress={() => {
                    setIsMenuOpen(false)
                    setIsProgramDropdownOpen(false)
                  }}
                >
                  {text}
                </Link>
              </NavbarMenuItem>
            ))}
        {Object.entries(links).map(([key, { href, text }]) => (
          <NavbarMenuItem key={key}>
            {href.startsWith("#") ? (
              <Link
                href={href}
                onPress={(e) => handleNavigation(e, href.substring(1))}
                className="w-full text-white text-lg py-2 hover:opacity-80 transition-opacity"
              >
                {text}
              </Link>
            ) : (
              <Link
                href={href}
                className="w-full text-white text-lg py-2 hover:opacity-80 transition-opacity"
              >
                {text}
              </Link>
            )}
          </NavbarMenuItem>
        ))}

        {/* Mobile Year Selector Dropdown */}
        <NavbarMenuItem className="mt-4 pt-4 border-t border-white/20">
          <Dropdown classNames={{ content: "bg-black" }}>
            <DropdownTrigger className="text-white hover:opacity-80 transition-opacity text-lg cursor-pointer w-full">
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white text-lg w-full justify-start"
                variant="light"
              >
                {year}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Year selection"
              className="bg-black text-white rounded-none border-none p-0"
              selectedKeys={[year.toString()]}
            >
              <DropdownItem
                key="2025"
                onPress={() => {
                  changeYear(2025)
                  setIsMenuOpen(false)
                }}
                className="h-14"
              >
                2025
              </DropdownItem>
              <DropdownItem
                key="2026"
                onPress={() => {
                  changeYear(2026)
                  setIsMenuOpen(false)
                }}
                className="h-14"
              >
                2026
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
