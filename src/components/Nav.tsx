import {
  RiDiscordLine,
  RiWalletLine,
  RiMenuLine,
  RiCloseLine,
} from "react-icons/ri";
import { navbarMenu } from "../constants";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-9999 flex h-[90px] w-full items-center justify-between px-[15%] py-0">
      {/* logo */}
      <div>
        <a href="#" className="text-2xl text-white capitalize lg:text-3xl">
          nox star
        </a>
      </div>
      {/* nav links */}
      <ul
        className={`border-primary absolute top-full ${
          isOpen ? "left-0" : "-left-full"
        } flex w-full flex-col items-start gap-0 border-t-[0.5px] transition-all duration-600 lg:relative lg:top-0 lg:left-0 lg:w-fit lg:flex-row lg:justify-center lg:gap-4 lg:border-none lg:text-lg`}
      >
        {navbarMenu.map((item) => (
          <li
            key={item.id}
            className="hover:border-primary hover:text-primary mx-1 block w-full border-b-[0.2px] border-black/20 px-0 py-4 pl-[12%] transition-all duration-600 last:border-none lg:m-0 lg:flex lg:w-auto lg:border-none lg:p-0"
          >
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
      {/* nav btns */}
      <div className="flex-center gap-3">
        {/* Discord button */}
        <button className="group flex-center shadow-primary relative h-4 w-10 cursor-pointer gap-2 overflow-hidden bg-stone-900 text-lg text-white transition-all duration-600 lg:h-11 lg:w-36 lg:text-xl">
          {/* لایه‌ی انیمیشن پرشونده */}
          <span className="bg-primary absolute inset-0 -translate-x-full transition-transform duration-600 ease-out group-hover:translate-x-0"></span>

          {/* محتوا (متن + آیکن) */}
          <span className="flex-center relative z-10 gap-2 transition-colors duration-600 group-hover:text-stone-900">
            <RiDiscordLine />
            Discord
          </span>
        </button>

        {/* Contacts button */}
        <button className="flex-center hover:border-primary shadow-primary h-11 w-36 cursor-pointer gap-2 border border-transparent bg-stone-900 text-xl text-white transition-all duration-600">
          <RiWalletLine />
          Contacts
        </button>

        <div
          className="bg-primary shadow-primary hover:border-primary hover:text-primary flex-center nav h-12 w-12 cursor-pointer rounded-sm border-2 border-transparent text-xl text-stone-900 duration-600 hover:bg-stone-900 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RiCloseLine /> : <RiMenuLine />}
        </div>
      </div>
    </div>
  );
}

export default Nav;
