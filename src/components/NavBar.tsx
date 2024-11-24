"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { SignOut } from "./SignOut";
import { SignOutButton } from "./SignOutButton";
import { SignInButton } from "./SignInButton";

const Navbar = () => {
  const session = useSession();

  const user = session.data?.user || null;
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo o nombre del sitio */}
        <div className="text-lg font-bold">
          <Link href="/">Herneli.com</Link>
        </div>

        {/* Menú de usuario */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              {user.image ? (
                <Image
                  width={40}
                  height={40}
                  src={user.image}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full"
                />
              ) : null}
              <span>{user.name}</span>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
