import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

import { AiOutlineSend, AiOutlineUserSwitch } from "react-icons/ai";

const Header = () => {
  return (
    <header className="border-b-[0.8px] border-b-[#ddd] shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-[12px]">
        <h2 className="text-[34px] text-[#3c98f4] font-medium">Logo</h2>

        <ul className="flex items-center gap-[40px] text-[18px] font-medium text-[#014568]">
          <li className="hover:underline cursor-pointer">
            <NavLink className="flex items-center gap-[4px]" to={"/"}>
              Countries
            </NavLink>
          </li>
          <li className="hover:underline cursor-pointer">
            <NavLink className="flex items-center gap-[4px]" to={"/movies"}>
              Movies
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-[10px] text-[20px]">
          <IoIosSearch />
          <AiOutlineSend />
          <AiOutlineUserSwitch />
        </div>
      </nav>
    </header>
  );
};

export default React.memo(Header);
