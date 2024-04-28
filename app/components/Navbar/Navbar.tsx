"use client";
import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { User } from "@prisma/client";

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar = ({ currentUser }: NavbarProps) => {
  return (
    <nav className="fixed top-2 xl:top-3 w-[97.5vw] sm:w-[95vw] md:w-[80vw] lg:w-[60vw] mx-[1.25vw] sm:mx-[2.5vw] md:mx-[10vw] lg:mx-[20vw] bg-black border-[1px] border-neutral-500  rounded-full z-[25]">
      <div className="py-2 xl:py-3">
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0 px-12">
          <Logo />
          <UserMenu currentUser={currentUser} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
