"use client";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site.config";

export const Logo = () => {
  return (
    <Image
      src="/logo.png" 
      alt="{siteConfig.title}" 
      width={26} 
      height={26} 
      priority
    />
  );
};

export default function Header() {
  const pathname = usePathname();
  const getNavItems = () => {
    return siteConfig.navItems.map((item) => {
      const isActive = pathname === item.href;
      return (
        <NavbarItem key={item.href}>
          <Link
            color="foreground" 
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`px-3 py1
              ${isActive ? "text-primary" : "text-foreground"}
              hover:text-blue-300 hover:border
              hover:boreder-blue-300 hover:rounded-md
              transitoin-colors transition-border
              duration-200`}
          >
            {item.label}
          </Link>
        </NavbarItem>
      );
    })
  }
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" className="flex gap-1">
          <Logo />
          <p className="font-bold text-inherit">{siteConfig.title}</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {getNavItems()}
      </NavbarContent>
      
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
