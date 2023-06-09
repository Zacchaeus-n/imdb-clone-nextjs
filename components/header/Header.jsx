"use client";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import MenuItem from "../menuItem/MenuItem";
import DarkModeSwitch from "../darkModeSwitch/DarkModeSwitch";

const Header = () => {
  return (
    <div className="flex justify-between max-w-7xl sm:mx-auto items-center mx-4 py-6">
      {/* menu */}
      <div className="flex space-x-4">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      {/* logo */}
      <div className="flex space-x-4 items-center sm:mr-4">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">IMDb</span>
            <span className="">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
