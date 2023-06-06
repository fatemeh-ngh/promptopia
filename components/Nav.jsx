"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import logo from '../public/assets/images/logo.svg';

const Nav = () => {
  return (
    <div className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src={logo}
          alt="promptopia logo"
          width={30}
          height={30}
          className="object-contain"
        />
      </Link>
    </div>
  );
};

export default Nav;
