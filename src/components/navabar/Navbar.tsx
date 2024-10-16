"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlinePlusCircle, AiOutlineTeam } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="px-4 bg-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="h-[3rem] w-[3rem]">
            <Image
              className="h-full w-full object-cover"
              src="/assets/images/logo.png"
              width={100}
              height={100}
              alt="logo.png"
            />
          </div>
          <a className="text-2xl font-bold">Dashboard</a>
        </div>
        <div className="flex gap-2">
          <Link
            href="/"
            className="p-2 py-1 hover:bg-gray-100 rounded cursor-pointer font-semibold flex items-center gap-1 text-gray-500 hover:text-gray-900"
          >
            <AiOutlinePlusCircle size={20} /> Add User
          </Link>
          <Link
            href="/users"
            className="px-4 py-2 hover:bg-gray-100 rounded cursor-pointer font-semibold flex items-center gap-1 text-gray-500 hover:text-gray-900"
          >
            <AiOutlineTeam size={20} /> Users Details
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
