import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800">
      <div className="container">
        <nav className="py-5 flex items-center justify-between">
          <div className="text-white">
            <Link href={"/"}>Logo</Link>
          </div>
          <ul className="flex text-white items-center justify-between gap-5">
            <li className="">
              <Link
                className="hover:text-blue-400 transition-colors duration-200"
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/users"}
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                href={"/products"}
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Prouducts
              </Link>
            </li>
            <li>
              <Link
                href={"/login"}
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
